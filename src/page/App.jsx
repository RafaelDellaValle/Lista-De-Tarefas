import './App.css';
import { useState } from "react";

function App() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [tipoFundo, setTipoFundo] = useState("padrao");

  const gradientes = {
    padrao: "linear-gradient(135deg, #153677, #4e085f)",
    suave: "linear-gradient(135deg, #f9d423, #ff4e50)",
    escuro: "linear-gradient(135deg, #232526, #414345)",
    tropical: "linear-gradient(135deg, #43cea2, #185a9d)",
  };

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
    <div 
      className="Container"
      style={{
        background: gradientes[tipoFundo],
      }}
    >     
      <div className="ToDoApp">
        <h2>
          To do list 
          <img className="ImagemList" src="../src/img/icone-to-do.png" alt="ícone"/>
        </h2>

        {/* Seletor de gradiente */}
        <div className="ColorPicker">
  {Object.entries(gradientes).map(([key, value]) => (
    <button
      key={key}
      className={`color-circle ${tipoFundo === key ? "selected" : ""}`}
      style={{ background: value }}
      onClick={() => setTipoFundo(key)}
      aria-label={`Selecionar plano de fundo ${key}`}
      title={`Plano de fundo ${key}`}
      type="button"
    />
  ))}
</div>
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
                onClick={() => alternarConcluida(index)}
              ></span>
              <span onClick={() => alternarConcluida(index)}>
                {tarefa.texto}
              </span>
              <img 
                src="../src/img/lixeira.png" 
                alt="Excluir"
                onClick={() => excluirTarefa(index)} 
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
