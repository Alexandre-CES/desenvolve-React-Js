import React, {useState, useEffect} from "react";
import { db } from "./firebaseConnection";
import { doc,setDoc,addDoc,collection } from 'firebase/firestore';

function App(){

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  async function cadastrarItem(){

    await addDoc(collection(db, 'posts'),{
        titulo: titulo,
        autor:autor
      }).then(()=>{
        console.log('Dados gravados com sucesso');
        setTitulo('');
        setAutor('');
      }).catch((err)=>{
        console.log('Error: '+err);
    })

    /*
    await setDoc(doc(db, 'posts', '123'),{
      titulo: titulo,
      autor:autor
    }).then(()=>{
      console.log('Dados gravados com sucesso')
    }).catch((err)=>{
      console.log('Error: '+err)
    })
    */
  }

  return(
    <div>
      <h1>React + Firebase</h1>
      <div>
        <label>Título: </label><br/>
        <textarea placeholder="Digite um título" value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>  
      </div>
      <div>
        <label>Autor: </label><br/>
        <input type="text" placeholder="Autor do Post" value={autor} onChange={(e)=>setAutor(e.target.value)}/>
      </div>
      <div>
        <button onClick={cadastrarItem}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;