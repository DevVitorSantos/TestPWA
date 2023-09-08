import styles from './Home.css'
import React, { useContext, useState} from 'react'
import { Context } from '../../App'
import { useNavigate } from 'react-router-dom'
import { VictoryBar, VictoryPie, VictoryLabel } from 'victory';

const Home = () => {

  const [ msg , setMsg ] = useState('')
  const [msgGlobal, setMsgGlobal]    = useContext(Context)

  const data = [
    {quarter: 'janeiro', earnings: 13000},
    {quarter: 'fevereiro', earnings: 16500},
    {quarter: 'março', earnings: 14250},
    {quarter: 'abril', earnings: 19000}
  ]

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

      <div className="graficos">
        <div className='grafico-01'>
        <VictoryPie
            animate={{
              duration: 200,
            }}
            labels={ ({datum}) => `${datum.x} - ${datum.y}%` }
            colorScale={["tomato", "orange", "gold" ]}
            data={[
              { x: "Cats", y: 35 },
              { x: "Dogs", y: 40 },
              { x: "Birds", y: 55 }
            ]}
          />
        </div>
        <div className='grafico-02'>
            <VictoryBar
              labels={ ({datum}) => `${datum.quarter} - ${datum.earnings}` }
              labelComponent={ 
              <VictoryLabel 
                angle={90}
                style={{
                  fill: "white"
                }}
              />
            }
              data={data}
            // data accessor for x values
              x="quarter"
            // data accessor for y values
              y="earnings"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Home
