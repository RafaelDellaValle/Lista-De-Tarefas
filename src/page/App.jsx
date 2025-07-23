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
    padrao: "linear-gradient(135deg, #153677, #4e085f)",
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
              src="/img/Icone-to-do.png" // Caminho corrigido
              alt="ícone de lista de tarefas" // Melhorar o alt text
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
            aria-label="Adicionar nova tarefa" // Adicionar aria-label para acessibilidade
          />
          <button className="Button-Lista" onClick={adicionarTarefa} type="button"> {/* Adicionar type="button" */}
            add
          </button>
        </div>

        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index} className={tarefa.concluida ? "checked" : ""}>
              <span
                className="check-icon"
                onClick={() => alternarConcluida(index)}
                role="checkbox" // Indicar que é um checkbox para leitores de tela
                aria-checked={tarefa.concluida} // Estado do checkbox
                tabIndex="0" // Tornar clicável com teclado
              ></span>
              <span>{tarefa.texto}</span>
              <img
                src="/img/Lixeira.png" // Caminho corrigido
                alt="Excluir tarefa" // Melhorar o alt text
                onClick={() => excluirTarefa(index)}
                role="button" // Indicar que é um botão
                tabIndex="0" // Tornar clicável com teclado
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;