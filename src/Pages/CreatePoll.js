import { useState } from "react";
import { Await, useNavigate } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import axios from "axios";
import { useAuth } from "../AuthContext";

const CreatePoll = () => {
    const navigate = useNavigate()
    const {url,token} = useAuth()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tanggal, setTanggal] = useState(null)
    const [jam, setJam] = useState(null)
    let deadline = tanggal+" "+jam
    let id = 1

    const makeChoice = (data) => {
        document.onkeydown = function (e) {
            if (e.key != 'Backspace' && e.key != 'Shift' && e.key != 'Alt'  && e.key != 'Tab'  && e.key != 'CapsLock'  && e.key != ' '  && e.key != 'Enter'  && e.key != 'ArrowLeft'  && e.key != 'ArrowRight' && e.key != 'ArrowUp'  && e.key != 'ArrowDown' ) {
                if (data == null || data == "") {
                    const create = document.createElement("input")
                    create.classList.add('form-control',"mb-1")
                    create.type = "text"
                    create.id = `choice ${id}`
                    create.name = 'choice'
                    create.addEventListener('keydown',(e) => makeChoice(e.target.value))
                    document.getElementById("choices").appendChild(create)

                    const btn = document.createElement('button')
                    btn.type = "button"
                    btn.classList.add('btn', 'btn-danger','p-1','mb-3')
                    btn.id = id
                    btn.addEventListener('click',(e) => deleteChoice(e.target.id))
                    btn.innerText = "Hapus"
                    document.getElementById("choices").appendChild(btn)

                    id++
                }
            }
        }
    }

    const deleteChoice = (id) => {
        console.log(id);
        const choices = document.getElementById('choices')
        const choice = document.getElementById(`choice ${id}`)
        const btn = document.getElementById(id)

        choices.removeChild(choice)
        choices.removeChild(btn)
    }

    const createPoll = async(e) => {
        const allChoices = [...document.querySelectorAll('input[name="choice"]')]
        let choices = []

        for (const choice of allChoices) {
            if (choice.value != "") {
                choices.push(choice.value)
            }
        }
        console.log(choices);

        e.preventDefault()
        await axios.post(`${url}/polling?token=${token}`,JSON.stringify({
            "title": title,
            "description": description,
            "deadline": deadline,
            "choice": choices
        }),{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then( res => {
            alert("berhasil membuat polling");
            console.log(res.data)
            navigate('/')
        }).catch(err => {
            console.log("gagal");
            alert(err.response.data.message)
        })
    }

    return (
        <div className="p-4">
            <h2 className="text-center">Create Polling</h2>
            <form>
                <div className="mb-3 d-flex">
                    <label className="form-label" style={{width: "15%"}}>Title</label>
                    <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} required></input>
                </div>

                <div className="mb-3 d-flex">
                    <label for="exampleFormControlTextarea1" className="form-label" style={{width: "15%"}}>Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{resize: "none"}} onChange={e => setDescription(e.target.value)} required></textarea>
                </div>

                <div className="mb-3 d-flex">
                    <label className="form-label" style={{width: "15%"}}>Deadline</label>
                    <input type="date" className="form-control text-left" style={{margin: "0px 3% 0px 0px", width:"75%"}} onChange={e => setTanggal(e.target.value)} required></input>
                    <input type="time" className="form-control text-left" style={{width:"22%"}} onChange={e => setJam(e.target.value)} required></input>
                </div>
                
                <div className="d-flex">
                    <label className="form-label" style={{width: "15%"}}>Pilihan</label>
                    <div className="d-block w-100 text-end" id="choices">
                        <input name="choice" type="text" className="form-control mb-4" onKeyDown={(e) => makeChoice(e.target.value)} style={{width: "100%"}} required></input>
                    </div> 
                </div>

                <div className="text-center">
                    <button
                        type="submit" 
                        onClick={(e) => createPoll(e)}
                        className="btn btn-success m-2 w-25 p-2">
                            Save
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger m-2 w-25 p-2"
                        onClick={() => navigate('/')}>
                            Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePoll