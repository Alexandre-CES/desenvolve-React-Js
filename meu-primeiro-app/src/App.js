import {useState} from "react";
import Alunos from "./components/alunos";
import './style.css';
import UserProvider from "./context/user";

function App(){

  return(
    <UserProvider>
      <div>
        <h3>Escolas: </h3>
        <Alunos/>
      </div>
      
    </UserProvider>
  );
}

export default App;