import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Change from './Pages/Change';
import CreatePoll from './Pages/CreatePoll';
import Hasil from './Pages/Hasil';
import Vote from './Pages/Vote';
import NotFound from './Pages/NotFound';
import { useEffect, useState } from 'react';
import AuthProvider from './AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/change" element={<Change/>}/>
          <Route path="/create-poll" element={<CreatePoll/>}/>
          <Route path="/hasil/:id" element={<Hasil/>}/>
          <Route path="/vote/:id" element={<Vote/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;
