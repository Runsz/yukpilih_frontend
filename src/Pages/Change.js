import axios from "axios";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const ChangePassword = () => {
    const navigate = useNavigate()

    const [Old, setOld] = useState()
    const [New, setNew] = useState()
    const [Confirm, setConfirm] = useState()
    const {url,token} = useAuth()

    const change = async(e) => {
        e.preventDefault()
        try {
            const result = await axios.put(`${url}/change-password?token=${token}`,{
                "old_password": Old,
                "new_password": New,
                "new_password_confirmation": Confirm
            },{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            }})

            alert(result.data.message)
            return navigate('/login')
        } catch (error) {
            console.log(error.response)
            alert(error.response.data.message)
        }
    }

    return (
        <div class="container-xl text-center mt-5">
            <h1 class="mb-5">Change Password</h1>
            <form method="post" onSubmit={(e) => change(e)}>
                <input 
                    class="form-control mx-auto w-50" 
                    placeholder="old password" 
                    type="password" 
                    required
                    onChange={e => setOld(e.target.value)}>
                </input><br></br>
                <input 
                    class="form-control mx-auto w-50" 
                    placeholder="new password" 
                    type="password"
                    required
                    onChange={e => setNew(e.target.value)}>
                </input><br></br>
                <input 
                    class="form-control mx-auto w-50" 
                    placeholder=" confirm password" 
                    type="password"
                    required
                    onChange={e => setConfirm(e.target.value)}>
                </input><br></br>
                <button 
                    type="submit" 
                    class="btn btn-primary w-50 mb-3 p-2">
                        change password
                </button>
            </form>
        </div>
    )
}

export default ChangePassword