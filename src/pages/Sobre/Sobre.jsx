import React, { useContext } from 'react'
import { Context } from '../../App'

const Sobre = () => {

  const { msgGlobal, setMsgGlobal }  = useContext(Context)

  
  return (
    <div>
      <h2>Sobre</h2>
      <p> olha a msg { msgGlobal && msgGlobal} </p>
    </div>
  )
}

export default Sobre
