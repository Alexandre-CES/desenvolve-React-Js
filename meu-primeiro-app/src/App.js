import React, {useState, useEffect} from "react";
import { db } from "./firebaseConnection";
import { 
  doc, collection,
  addDoc, getDocs, updateDoc, deleteDoc 
} from 'firebase/firestore';
import './style.css';

function App(){

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);
  const [idPost, setIdPost] = useState('');

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

    buscarItem();
    
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

  async function atualizarItem(){
    if(idPost != ''){
      const postRef = doc(db,'posts',idPost);

      await updateDoc(postRef,{
        titulo:titulo,
        autor:autor
      }).then(()=>{
        console.log('Dados atualizados com sucesso!');
        setTitulo('');
        setAutor('');

        buscarItem();
      }).catch((err)=>{
        console.log('error: '+err);
      })
    }
  }

  async function excluirItem(id){
    const postRef = doc(db,'posts',id);

    await deleteDoc(postRef).then(()=>{
      console.log('Dados Deletados com sucesso!');
      buscarItem();
    }).catch((err)=>{
      console.log('error: '+err);
    })
  }

  useEffect(()=>{
    buscarItem();
  })

  return(
    <main>
      <h1>React + Firebase</h1>
      <div>
        <label>ID: </label><br/>
        <textarea placeholder="ID" value={idPost} onChange={(e)=>setIdPost(e.target.value)}/>  
      </div>
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
        <button onClick={atualizarItem}>AtualizarPost</button>
      </div>

      <section>
        <h3>Listagem de Posts</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Autor</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            posts.map((post)=>{
              return(
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.titulo}</td>
                  <td>{post.autor}</td>
                  <td>
                    <button onClick={()=>excluirItem(post.id)}>Excluir</button>
                  </td>
                  <td>
                    <button onClick={()=>{
                      setIdPost(post.id);
                      setTitulo(post.titulo);
                      setAutor(post.autor);
                    }}>Editar</button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default App;