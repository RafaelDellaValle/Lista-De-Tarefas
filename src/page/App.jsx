import './App.css';
import { useState, useEffect } from "react";

function App() {
  // Estado para as tarefas
  const [tarefas, setTarefas] = useState(() => {
    const saved = localStorage.getItem("tarefas");
    return saved ? JSON.parse(saved) : [];
  });

  // Estado para o tipo de fundo
  const [tipoFundo, setTipoFundo] = useState(() => {
    return localStorage.getItem("tipoFundo") || "padrao";
  });

  const gradientes = {
    padrao: "linear-gradient(135deg, #FF2DD1, #4e085f)",
    suave: "linear-gradient(135deg, #f9d423, #ff4e50)",
    escuro: "linear-gradient(135deg, #232526, #414345)",
    tropical: "linear-gradient(135deg, #43cea2, #185a9d)",
  };

  // Estado para o texto da nova tarefa
  const [texto, setTexto] = useState("");

  // Salvar tarefas no localStorage quando atualizarem
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  // Salvar tipo de fundo no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem("tipoFundo", tipoFundo);
  }, [tipoFundo]);

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
        <div className="Header">
          <h2>
            To do list
            <img
              className="ImagemList"
              src="../public/Tarefa.png"
              alt="ícone"
            />
          </h2>

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
        </div>

        <div className="Row">
          <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="add your text"
          />
          <button className="Button-Lista" onClick={adicionarTarefa}>
            add
          </button>
        </div>

        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index} className={tarefa.concluida ? "checked" : ""}>
              <span
                className="check-icon"
                onClick={() => alternarConcluida(index)}
              ></span>
              <span>{tarefa.texto}</span>
              <img
                src="../public/Lixeira.png"
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