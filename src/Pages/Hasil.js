import { useNavigate } from 'react-router-dom';
import '../index.css';

const Hasil = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="p-4 pb-0">
                <h4>Pilih makanan favorit</h4>
                <p>created by : arun deadline : 30/3/2023 23:59 WIB</p>
                <p className='mb-0'>Apa makanan Favoritmu?</p>
            </div>
            <div className="p-4">
                <div>
                    <label>mie ayam</label>
                    <div id='progress' className="progress w-75">
                        <div style={{width: "15%"}} className="progress-bar progress-bar-striped progress-bar-animated">15%</div>
                    </div>
                </div>
                <div>
                    <label>sate</label>
                    <div id='progress' className="progress w-75">
                        <div  style={{width: "50%"}} className="progress-bar progress-bar-striped progress-bar-animated">50%</div>
                    </div>
                </div>
                <div>
                    <label>bakso</label>
                    <div id='progress' className="progress w-75">
                        <div  style={{width: "35%"}} className="progress-bar progress-bar-striped progress-bar-animated">35%</div>
                    </div>
                </div>
            </div>
            <div className='text-center w-75'>
                <button 
                    type='button' 
                    className='btn btn-primary'
                    onClick={() => navigate('/')}>
                        Back
                </button>
            </div>
        </div>
    )
}


export default Hasil