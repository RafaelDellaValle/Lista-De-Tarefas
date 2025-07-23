import './App.css';
import { useState } from "react";

function App() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (texto.trim() === "") return;

    const novaTarefa = { texto: texto, concluida: false };
    setTarefas([...tarefas, novaTarefa]);
    setTexto("");
  }

  function alternarConcluida(index) {
    const novaLista = [...tarefas];
    novaLista[index].concluida = !novaLista[index].concluida; // inverte o valor
    setTarefas(novaLista);
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
            <li 
              key={index}
              onClick={() => alternarConcluida(index)}
              style={{
                textDecoration: tarefa.concluida ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {tarefa.texto}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;