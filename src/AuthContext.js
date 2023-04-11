import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children, isProtected = false }) => {
    const url = "http://localhost:8000/api"
    const [token, setToken] = useState("")
    const [username, setUsername] = useState("admin2")
    const [password, setPassword] = useState("12345678")
    const navigate = useNavigate()

    const Login = async (e) => {
        e.preventDefault()
        await axios.post(`${url}/login`,JSON.stringify({
            "username": username,
            "password": password
        }), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            const tkn = res.data.token
            setToken(tkn)

            if (res.data.change == true) {
                return navigate('/change')
            } else {
                return navigate('/')
            }
        }).catch(err => {
            alert(err.response.data.message)    
        })
    }

    console.log(token)

    useEffect(() => {
        if(token == '' || token == null) {
            navigate('/login')
        }
    },[])

    return (
        <AuthContext.Provider value={{ url, setUsername, username, setPassword, password, Login, token }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider