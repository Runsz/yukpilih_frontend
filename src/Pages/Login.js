import { Await, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthProvider, { useAuth } from "../AuthContext";

const Login = () => {
    const { setUsername, username, setPassword, password, Login} = useAuth()

    return (
        <div className="container-xl text-center p-5">
            <h1 className="mb-5">YukPilih</h1>
            <form onSubmit={(e) => Login(e)}>
                <input 
                    id="username" 
                    className="form-control mx-auto w-50" 
                    placeholder="username" 
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required>
                </input><br></br>
                <input 
                    id="password" 
                    className="form-control mx-auto w-50" 
                    placeholder="password" 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required>
                </input><br></br>
                <button 
                    type="submit" 
                    className="btn btn-primary w-50 mb-3 p-2">
                        Login
                </button>
            </form>
        </div>
    )
}

export default Login