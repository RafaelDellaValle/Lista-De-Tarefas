import './App.css'
import './App.css'
import { useState } from "react";

function App() {
  const [texto, setTexto] = useState("");    // texto do input
  const [tarefas, setTarefas] = useState([]); // lista de tarefas (inicia vazia)

  function adicionarTarefa() {
    if (texto.trim() === "") return;        // não adiciona se estiver vazio

    setTarefas([...tarefas, texto]);        // adiciona o texto na lista
    setTexto("");                           // limpa o input
  }

  return (
    <div className="Container">     
      <div className="ToDoApp">
        <h2>
          To do list
          <img className="ImagemList" src="../src/img/icone-to-do.png" alt="ícone"/>
        </h2>
        <div className='Row'>
          <input 
            type="text" 
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder='add your text'
          />
          <button className='Button-Lista' onClick={adicionarTarefa}>add</button>
        </div>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
