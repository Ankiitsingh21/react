import React, { useState } from 'react'
import './App.css'
import { BrowserRouter , redirect, Route, Routes, useNavigate} from 'react-router-dom'
const Dashboard = React.lazy(() => import('./components/dashboard'));
const Landing = React.lazy(() => import('./components/landing'));

function App() {

  return (
    <BrowserRouter>
      <div>
         <AppBar/>
         <Routes>
         <Route path="/Dashboard" element = {<Dashboard/>}/>
         <Route path="/" element = {<Landing/>}/>
         </Routes>
      </div>
    </BrowserRouter>
  )
}

function AppBar(){
  const navigate = useNavigate();
  return <div>
    <div>
          <button onClick={()=>{
            navigate("/Dashboard");
          }}>Dashboard</button>
          <button onClick={()=>{
            navigate("/");
          }}>Landing Page</button>
    </div>
  </div>
}

export default App
