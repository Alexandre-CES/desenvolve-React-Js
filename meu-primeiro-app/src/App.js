import React, {useState, useEffect} from "react"

function App(){

  const [tarefas,setTarefas] = useState([])

  const [input,setInput] = useState('');

  //component didMount
  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  },[])

  //component didUpdate
  useEffect(()=>{
    if(tarefas.length != 0){
      localStorage.setItem('tarefas',JSON.stringify(tarefas));
    } 
  }, [tarefas])

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
            return <li key={tarefa}>{tarefa}</li>
          })
        }
      </ul>

      <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
      <button type='button' onClick={adicionar}>Adicionar</button>

    </div>
  );
}

export default App;