import React, { useContext, useState} from 'react'
import { Context } from '../../App'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [ msg , setMsg ] = useState('')
  const [msgGlobal, setMsgGlobal]    = useContext(Context)

  // extract use navigate for redirect
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()

    // 
    

    // redireciona para dashboard
    if( msg ){
      setMsgGlobal({
        tipo: 'Success',
        msg: msg
      })
      navigate("/dashboard")
    }
    
    
  }

  return (
    <div>
      <h2>Home</h2>
      Sejam Bem vindos
      <br/>
      <form onSubmit={handleClick}>
        <label>
          <input 
            type="text" 
            name=""
            value={msg}
            onChange={(e) => setMsg( e.target.value)}
            />
        </label>

        <button > Enviar</button>
      </form>
      
    </div>
  )
}

export default Home
