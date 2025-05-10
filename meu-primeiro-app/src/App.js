import React, {useState, useEffect} from "react";
import { db } from "./firebaseConnection";
import { doc,setDoc,addDoc, getDocs, collection } from 'firebase/firestore';

function App(){

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);

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

  async function buscarItem(){
    const postRef = collection(db,'posts');

    await getDocs(postRef).then((snapshot)=>{
      let lista = [];

      snapshot.forEach(doc=>{
        lista.push({
          id:doc.id,
          titulo:doc.data().titulo,
          autor:doc.data().autor
        });
      });

      setPosts(lista);
    })
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
        <button onClick={buscarItem}>Buscar</button>
      </div>

      <div>
        <h3>Listagem de Posts</h3>
        <table>
          <tr>
            <th>Título</th>
            <th>Autor</th>
          </tr>
          {
            posts.map((post)=>{
              return(
                <tr key={post.id}>
                  <td>{post.titulo}</td>
                  <td>{post.autor}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  );
}

export default App;