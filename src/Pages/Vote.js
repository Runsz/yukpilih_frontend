import { useState } from 'react';
import { Border } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const Vote = () => {
    const navigate = useNavigate()
    const [Click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true)
    }

    const datas = [
        {id:1, nama:"mie ayam"},
        {id:2, nama:"sate"},
        {id:3, nama:"bakso"},
    ]

    return (
        <div>
            <div className="p-4 pb-0">
                <h4>Pilih makanan favorit</h4>
                <p>created by : arun deadline : 30/3/2023 23:59 WIB</p>
                <p className='mb-0'>Apa makanan Favoritmu?</p>
            </div>
            <div className="d-flex w-100 p-4">
                {datas.map((data,index )=> {
                    return (<div 
                        id="vote" 
                        className="bg-primary rounded text-center p-2"
                        style={{width:"30%",margin:"0px 10px", border: Click ? '2px solid black' : ''}}
                        onClick={handleClick}>
                            {data.nama}
                    </div>
                )})}
            </div>
            <div className="text-center">
                <button 
                    type="submit" 
                    className="btn btn-primary mt-2"
                    onClick={() => navigate('/hasil')}>
                        vote
                </button>
            </div>
        </div>
    )
}

export default Vote