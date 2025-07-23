import { useState } from 'react'
import './App.css'

function App() {
  const[tarefa, setTarefa] = useState("");  //cria uma "caixa" para guardar o texto


  return (
      <div className="Container">     
       <title>Rafael</title>
        <div className="ToDoApp">
          <h2>To do list<img className="ImagemList" src='../src/img/icone-to-do.png'/></h2>
          <div className='Row'>
            <input 
            type="text" 
            value={tarefa}
            onChange={(d) => setTarefa(d.target.value)}
            placeholder='add your text'>
            </input>
            <button>add</button>
          </div>
          <ul id='lis-container'>
            <li>task1{tarefa}</li>
            <li>task2</li>
            <li>task3</li>

          </ul>
        </div>
        
      </div>
  )
}

export default App
