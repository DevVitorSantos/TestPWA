import { useState } from 'react'
 

export const useMessage = (message) => {
  
    const [ workMensagem , setWorkMensagem ] = useState('')
    
    
    

    return  [workMensagem, setWorkMensagem]
}


