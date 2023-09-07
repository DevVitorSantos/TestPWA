import { useState,useEffect , useContext} from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

//components
import Navbar from './components/Navbar'

//pages
import Sobre from './pages/Sobre/Sobre'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import MsgAlert from './components/MsgAlert'

export const Context = React.createContext()

function App() {
  
  
  const [ msgGlobal, setMsgGlobal ] = useState('')

  return (
    <>
      <Context.Provider value={[ msgGlobal, setMsgGlobal ] }>
        <div className='app-container'>
          <BrowserRouter> 
          <Navbar />
          <MsgAlert />
          
          
          <h1> Qual é a mensagem - {msgGlobal && msgGlobal.msg } </h1>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/sobre' element={<Sobre />}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </Context.Provider>
    </>
  )
}

export default App
