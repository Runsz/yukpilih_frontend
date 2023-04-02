import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate()

    const [Username, setUsername] = useState()
    const [Password, setPassword] = useState()

    async () => {
        await axios.post('http://localhost:8000/api/login',{
            "username": Username,
            "password": Password
        })
    }

    return (
        <div class="container-xl text-center p-5">
            <h1 class="mb-5">YukPilih</h1>
            <form>
                <input 
                    id="username" 
                    class="form-control mx-auto w-50" 
                    placeholder="username" 
                    type="text" 
                    onChange={e => setUsername(e.target.value)}>
                </input><br></br>
                <input 
                    id="password" 
                    class="form-control mx-auto w-50" 
                    placeholder="password" 
                    type="password"
                    onChange={e => setPassword(e.target.value)}>
                </input><br></br>
                <button 
                    type="submit" 
                    class="btn btn-primary w-50 mb-3 p-2"
                    onClick={() => navigate('/change')}>
                        Login
                </button>
            </form>
        </div>
    )
}

export default Login