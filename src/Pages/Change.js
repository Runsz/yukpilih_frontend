import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const navigate = useNavigate()

    const [Old, setOld] = useState()
    const [New, setNew] = useState()
    const [Confirm, setConfirm] = useState()

    console.log(Old)
    console.log(New)
    console.log(Confirm)

    return (
        <div class="container-xl text-center mt-5">
            <h1 class="mb-5">Change Password</h1>
            <form>
                <input 
                    class="form-control mx-auto w-50" 
                    placeholder="old password" 
                    type="password" 
                    onChange={e => setOld(e.target.value)}>
                </input><br></br>
                <input 
                    class="form-control mx-auto w-50" 
                    placeholder="new password" 
                    type="password"
                    onChange={e => setNew(e.target.value)}>
                </input><br></br>
                <input 
                    class="form-control mx-auto w-50" 
                    placeholder=" confirm password" 
                    type="password"
                    onChange={e => setConfirm(e.target.value)}>
                </input><br></br>
                <button 
                    type="submit" 
                    class="btn btn-primary w-50 mb-3 p-2"
                    onClick={() => navigate('/')}>
                        change password
                </button>
            </form>
        </div>
    )
}

export default ChangePassword