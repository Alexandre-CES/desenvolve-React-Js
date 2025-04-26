import React from "react"

const Professor = (props) => {
  return(
    <div>
      <Geral nome={props.nome} especialidade={props.especialidade} idade={props.idade}/>
      <Social urlFacebook={props.facebook} urlInstagram={props.instagram}/>
      <hr/>
    </div>
  )
}

const Geral = (props) => {
  return(
    <div>
      <h2>{props.nome} | {props.especialidade} | {props.idade}</h2>
    </div>
  )
}

const Social = (props) => {
  return(
    <div>
      <a href={props.urlFacebook}>Facebook</a> - <a href={props.urlInstagram}>Instagram</a>
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>Conheça nossos professores</h1>
      <Professor nome='Lucas' especialidade='Front-end' idade='37' facebook='https://www.facebook.com' instagram='https://www.instagram.com'/>
      <Professor nome='Pedro' especialidade='Back-end' idade='27' facebook='https://www.facebook.com' instagram='https://www.instagram.com'/>
      <Professor nome='Robson' especialidade='Fullstack' idade='25' facebook='https://www.facebook.com' instagram='https://www.instagram.com'/>
    </div>
  );
}

export default App;