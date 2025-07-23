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
    novaLista[index].concluida = !novaLista[index].concluida;
    setTarefas(novaLista);
  }

  function excluirTarefa(index) {
    const novaLista = tarefas.filter((_, i) => i !== index);
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
          className={tarefa.concluida ? "checked" : ""}
        >
          <span 
            className="check-icon"
            onClick={() => alternarConcluida(index)}  // aqui
          ></span>
          <span onClick={() => alternarConcluida(index)}>
            {tarefa.texto}
          </span>
          <img src="../src/img/lixeira.png" onClick={() => excluirTarefa(index)} />
        </li>

          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;