import React, {useState, useEffect, useMemo, useCallback} from "react"

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

  const adicionar = useCallback(() =>{
    setTarefas([...tarefas,input]);

    setInput('');
  }, [input,tarefas]);

  const totalTarefas = useMemo(()=>tarefas.length, [tarefas])

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

      <h2>Você tem {totalTarefas} tarefas pendentes</h2>

      <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
      <button type='button' onClick={adicionar}>Adicionar</button>

    </div>
  );
}

export default App;