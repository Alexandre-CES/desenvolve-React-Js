import React, {Component} from "react"

class Professor extends Component{
  render(){
    return(
      <div>
        <Geral nome={this.props.nome} especialidade={this.props.especialidade} idade={this.props.idade}/>
        <Social urlFacebook={this.props.facebook} urlInstagram={this.props.instagram}/>
        <hr/>
      </div>
    );
  };
}

class Geral extends Component{
  render(){
    return(
      <div>
        <h2>{this.props.nome} | {this.props.especialidade} | {this.props.idade}</h2>
      </div>
    );
  };
}

class Social extends Component{
  render(){
    return(
      <div>
        <a href={this.props.urlFacebook}>Facebook</a> - <a href={this.props.urlInstagram}>Instagram</a>
      </div>
    );
  };
}

function App(){

  return (
    <div>
      <h1>Conheça nossos professores</h1>
      <Professor nome='Lucas' especialidade='Front-end' idade='37' facebook='https://www.facebook.com' instagram='https://www.instagram.com'/>
      <Professor nome='Pedro' especialidade='Back-end' idade='27' facebook='https://www.facebook.com' instagram='https://www.instagram.com'/>
      <Professor nome='Robson' especialidade='Fullstack' idade='25' facebook='https://www.facebook.com' instagram='https://www.instagram.com'/>
    </div>
  );
}

export default App;