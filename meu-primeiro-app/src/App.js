import React, {Component} from "react"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      logado:false
    };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar(){
    this.setState({logado:true});
  }

  sair(){
    this.setState({logado:false});
  }

  render(){
    return(
      <div>
        <h1>Curso de React JS</h1>
        <div>
          {
            (this.state.logado) ? 
            <div>
              <h2>Bem-vindo ao sistema!</h2>
              <button onClick={this.sair}>Sair</button>
            </div>:
            <div>
              <h2>Faça o login</h2>
              <button onClick={this.entrar}>Realizar Login</button>
            </div>
          }
        </div>
      </div>
      
    )
  }
}

export default App;