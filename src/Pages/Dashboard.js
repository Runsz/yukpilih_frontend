import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import * as Icon from 'react-bootstrap-icons';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
    const navigate = useNavigate() 
    const {url,token} = useAuth()
    const [Polls, setPolls] = useState([])
    const [User, setUser] = useState({})

    useEffect(() => {
        (async (e) => {
            const res = await axios.get(`${url}/user?token=${token}`)
                    .then(response => setUser(response.data))
                    .catch(err => console.log(err.response.data.message))
        })()
    },[])
   
    useEffect(() => {
        (async (e) => {
            const res = await axios.get(`${url}/polling?token=${token}`)
                    .then(response => setPolls(response.data))
        })() 
    },[])

    const Logout = async() => {
        await axios.post(`${url}/logout?token=${token}`)
            .then(res => {
                    alert("Logout berhasil")
                    navigate('/login') 
                })
            .catch(err => alert(err.response.data.message))
    }

    const deletePoll = async(id) => {
        const res = await axios.delete(`${url}/polling/${id}?token=${token}`)

        alert(`Polling id:${id} berhasil dihapus`)

        axios.get(`${url}/polling?token=${token}`)
            .then(response => setPolls(response.data))
    }

    const cekVote = async(id) => {
        await axios.post(`${url}/polling/${id}/voting?token=${token}`)
                .then(res => {
                    console.log(res.data);
                    let voting = res.data.voting
                    let waktu =res.data.waktu
                    if (voting == true) {
                        alert("anda sudah memilih")
                        navigate(`/hasil/${id}`)
                    }
                    else if(waktu == true ){
                        alert("waktu memilih sudah habis")
                        navigate(`/hasil/${id}`)
                    }
                    else if(voting == false){
                        navigate(`/vote/${id}`)
                    }
                }).catch(err => {
                    console.log(err.response.data)
                })
    }

    return (
        <div className='p-4'>
            {/* <h1>Ini Dashboard</h1> */}
            <nav className='navbar '>
                <div>
                    <h2>YukPilih</h2>
                    <p key={User.id}>Hello, {User.username}</p>
                </div>
                <div 
                    id="button"
                    className='pb-5' 
                    onClick={() => Logout()}>
                        <Icon.BoxArrowRight/>
                </div>
            </nav>

            {Polls.map(p => (
                <div className='mt-3' key={p.id}>
                    <div className='p-3 position-relative border border-primary-subtle border-2 rounded d-flex'>
                        <div id="button" onClick={ User.role == "admin" ? () => navigate(`/hasil/${p.id}`) : () => cekVote(p.id)}>
                            <h4>{p.title}</h4>
                            <p>created by : {p.admin.username} deadline : {p.deadline}</p>
                            <p>{p.description}</p>
                        </div>
                        {User.role == "admin" ? <Icon.Trash3 key={p.id} id="button" className='position-absolute top-0 end-0 m-3' onClick={() => deletePoll(p.id)}/> : ""}
                    </div>
                </div>
            ))}  

            <div>
                {User.role == "admin" ? 
                    <button 
                        className='btn btn-primary m-5 rounded-circle' 
                        style={{width:"fit-content",position:" fixed",bottom:"0",right: "0"}}
                        onClick={() => navigate('/create-poll')}>
                            <Icon.PlusLg/>
                    </button> : ""
                }
            </div>
        </div>
    )
}


export default Dashboard