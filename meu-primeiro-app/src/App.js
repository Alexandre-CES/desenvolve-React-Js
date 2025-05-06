import React, {useState} from "react"

function App(){

  const [tarefas,setTarefas] = useState([
    'Fazer compras',
    'Lavar Roupas'
  ])

  const [input,setInput] = useState('');

  function adicionar(){
    setTarefas([...tarefas,input]);

    setInput('');
  }

  return(
    <div>
      <h1>Hooks</h1>
      
      <ul>
        {
          tarefas.map((tarefa)=>{
            return <li>{tarefa}</li>
          })
        }
      </ul>

      <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
      <button type='button' onClick={adicionar}>Adicionar</button>

    </div>
  );
}

export default App;