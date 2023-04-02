import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Change from './Pages/Change';
import CreatePoll from './Pages/CreatePoll';
import Hasil from './Pages/Hasil';
import Vote from './Pages/Vote';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/change" element={<Change/>}/>
        <Route path="/create-poll" element={<CreatePoll/>}/>
        <Route path="/hasil" element={<Hasil/>}/>
        <Route path="/vote" element={<Vote/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App;
