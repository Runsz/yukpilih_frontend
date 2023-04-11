import axios from 'axios';
import { useState, useEffect } from 'react';
import { Border } from 'react-bootstrap-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Vote = () => {
    const navigate = useNavigate()
    const {url, token} = useAuth()
    const [Polling, setPolling] = useState({})
    const {id} = useParams()
    const [choiceId, setChoiceId] = useState(null)

    useEffect(() => {
        (async (e) => {
                const res = await axios.get(`${url}/polling/${id}?token=${token}`)
                    .then( response => setPolling(response.data))
        })()
    },[])

    const voting = async() => {
        if (choiceId == null) {
            alert("Harus memilih salah satu")
        }else{
            await axios.post(`${url}/polling/${id}/vote?token=${token}`,{
                "choice_id":choiceId
            }).then( res => {
                alert(res.data.status)
                navigate(`/hasil/${id}`)
            }).catch( err => {
                alert(err.response.data)
                navigate(`/`)
            })
        }
    }

    return (
        <div className='text-center mt-5'> 
            {Polling.admin !=null && Polling.choices != null ? 
                <>
                    <div className="p-4 pb-0">
                        <h1>{Polling.title}</h1>
                        <p>created by : {Polling.admin.username} deadline : {Polling.deadline}</p>
                        <h5 className='mb-0'>{Polling.description}?</h5>
                    </div> 

                    <div className=" w-100 p-5">
                        {Polling.choices.map(p => (
                            <div 
                                key={p.id}
                                id="vote" 
                                onClick={() => setChoiceId(p.id)}
                                className={`bg-info rounded text-center p-2 ${choiceId == p.id ? "border border-3 border-primary" : ""}`}
                                style={{width:"30%", margin:"10px auto", color:"white"}}>
                                    {p.choice}
                            </div> 
                        ))}
                    </div>

                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="btn btn-primary mt-2"
                            onClick={() => voting()}>
                                vote
                        </button>
                    </div>
                </> 
            : ""}
        </div>
    )
}

export default Vote