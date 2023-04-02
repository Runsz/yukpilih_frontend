import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

const CreatePoll = () => {
    const navigate = useNavigate()

    const [Title, setTitle] = useState()
    const [Description, setDescription] = useState()
    const [Deadline, setDeadline] = useState()
    const [Pilihan, setPilihan] = useState()

    console.log(Title)
    console.log(Description)
    console.log(Deadline)
    console.log(Pilihan)

    return (
        <div className="p-4">
            <h2 className="text-center">Create Polling</h2>
            <form>
                <div class="mb-3 d-flex">
                    <label class="form-label" style={{width: "15%"}}>Title</label>
                    <input type="text" class="form-control" onChange={e => setTitle(e.target.value)}></input>
                </div>
                <div class="mb-3 d-flex">
                    <label for="exampleFormControlTextarea1" class="form-label" style={{width: "15%"}}>Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{resize: "none"}} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div class="mb-3 d-flex">
                    <label className="form-label" style={{width: "15%"}}>Deadline</label>
                    <input type="date" className="form-control text-left" style={{margin: "0px 3% 0px 0px", width:"75%"}} onChange={e => setDeadline(e.target.value)}></input>
                    <input type="time" className="form-control text-left" style={{width:"22%"}} onChange={e => setDeadline(e.target.value)}></input>
                </div>
                <div class="mb-3 d-flex">
                    <label class="form-label" style={{width: "15%"}}>Pilihan</label>
                    <input type="text" class="form-control" style={{width: "97%"}} onChange={e => setPilihan(e.target.value)}></input>
                    <div  className='position-relative' style={{width: "3%"}}>
                        <Icon.Trash3 id="button" className='position-absolute top-0 end-0 m-2'/>
                    </div>
                </div>
            </form>
            <div className="text-center">
                <button 
                    type="submit" 
                    className="btn btn-success m-2 w-25 p-2"
                    onClick={() => navigate('/')}>
                        Save
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger m-2 w-25 p-2"
                    onClick={() => navigate('/')}>
                        Cancel
                </button>
            </div>
        </div>
    )
}

export default CreatePoll