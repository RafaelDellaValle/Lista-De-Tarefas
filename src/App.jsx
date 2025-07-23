import './App.css'

function App() {
  return (
  <html>
    <head>
      <meta />
      <title>Rafael</title>
    </head>
    <body className="Container">
      <div >
        <div className="ToDoApp">
          <h2>To do list<img className="ImagemList" src='../src/img/icone-to-do.png'/></h2>
          <div className='Row'>
            <input type="text" id='input-box' placeholder='add your text'></input>
            <button>add</button>
          </div>
          <ul id='lis-container'>
            <li>task1</li>
            <li>task2</li>
            <li>task3</li>

          </ul>
        </div>
        
      </div>
    </body>
  </html>

  )
}

export default App
