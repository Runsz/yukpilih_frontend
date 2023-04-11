import { useNavigate, useParams } from 'react-router-dom';
import '../index.css';
import { useAuth } from '../AuthContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const Hasil = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [votes, setVotes] = useState([])
    const [polling, setPolling] = useState({})
    const {url, token} = useAuth()

    useEffect(() => {
        (async () => {
            await axios.get(`${url}/polling/${id}?token=${token}`)
                .then(res => setPolling(res.data))
        })()
    },[])

    useEffect(() => {
        (async () => {
            await axios.get(`${url}/polling/${id}/result?token=${token}`)
                .then(res => setVotes(res.data))
        })()
    },[])
    console.log(votes);

    return (
        <div>
            {polling.choices != null && votes != null && polling.admin != null ? 
                <>
                    <div className="p-4 pb-0 mb-2">
                        <h4>{polling.title}</h4>
                        <p>created by : {polling.admin.username} deadline : {polling.deadline}</p>
                        <p>{polling.description}</p>
                    </div>
                    {polling.choices.map(c => (
                    <div className='mx-4 m-4'>
                        <div key={c.id}>
                            <label>{c.choice}</label>
                            <div id='progress' className="progress w-75">
                                <div style={{width: votes[c.choice] == 0 ? "undefind" : `${votes[c.choice]}%`}} className="progress-bar progress-bar-striped progress-bar-animated">{votes.length == 0  || votes[c.choice] == null ? "0%":`${votes[c.choice]}%`}</div>
                            </div>
                        </div>
                    </div>))}

                    <div className='text-center w-75'>
                        <button 
                            type='button' 
                            className='btn btn-primary'
                            onClick={() => navigate('/')}>
                                Back
                        </button>
                    </div>
                </>
            : ""}
        </div>
    )
}


export default Hasil