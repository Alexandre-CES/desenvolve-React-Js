import React from "react"

const Curso = (props) => {
  return(
    <div>
      <h2>Curso de {props.nome} ({props.carga}h)</h2>
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>Bem Vindo ao sistema!</h1>
      <Curso nome='React' carga='30'/>
      <Curso nome='Java' carga='16'/>
      <Curso nome='PHP' carga='18'/>
    </div>
  );
}

export default App;