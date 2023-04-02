import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate() 

    return (
        <div className='p-4'>
            <nav className='navbar '>
                <div>
                    <h2>YukPilih</h2>
                    <p>hello, username</p>
                </div>
                <div 
                    id="button"
                    className='pb-5' 
                    onClick={() => navigate('/login')}>
                        <Icon.BoxArrowRight />
                </div>
            </nav>
            <div
                className='mt-3'>
                <div className='p-3 position-relative border border-primary-subtle border-2 rounded d-flex'>
                    <div id="button" onClick={() => navigate('/vote')}>
                        <h4>Title Polling</h4>
                        <p>created by : arun deadline : 30/3/2023 23:59 WIB</p>
                        <p>Apa makanan Favoritmu?</p>
                    </div>
                    <Icon.Trash3 id="button" className='position-absolute top-0 end-0 m-3'/>
                </div>
            </div>
            <div className=''>
                <button 
                    className='btn btn-primary m-5 rounded-circle' 
                    style={{width:"fit-content",position:" fixed",bottom:"0",right: "0"}}
                    onClick={() => navigate('/create-poll')}>
                        <Icon.PlusLg/>
                </button>
            </div>
        </div>
    )
}


export default Dashboard