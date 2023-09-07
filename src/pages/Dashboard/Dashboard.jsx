import React , {useContext, useState} from 'react'
import { Context } from '../../App'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const [msgGlobal, setMsgGlobal]    = useContext(Context)
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    

    setMsgGlobal({
      tipo: 'Error',
      msg: '🚀bora para proxima pagina: sobre'
    })
    
    navigate("/sobre")
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleClick}>Bora</button>
    </div>
  )
}

export default Dashboard
