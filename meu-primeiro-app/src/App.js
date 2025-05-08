import React, {useState, useEffect} from "react";
import './style.css';

function App(){

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    function loadApi(){
      let url = 'https://jsonplaceholder.typicode.com/posts';
      fetch(url)
        .then(result => result.json())
        .then(json => {
          setPosts(json);
        })
    }

    loadApi();
  },[])

  return(
    <div className="container">
      <header>
        <strong>React Blog</strong>
      </header>

      {
        posts.map((post)=>{
          return(
            <article key={post.id} className="post">
              <strong className="title">{post.title}</strong>
              <p>{post.body}</p>
            </article>
          )
        })
      }
      
    </div>
  );
}

export default App;