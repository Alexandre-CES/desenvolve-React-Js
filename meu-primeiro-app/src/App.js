import React, {Component} from "react"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome:'',
      email:'',
      senha:'',
      error:''
    };

    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(event){
    const{nome,email,senha} = this.state;

    if(nome != '' && email != '' && senha != '' ){
      this.setState({error:''});
      alert(` Nome: ${nome}\n Email: ${email}\n Senha: ${senha}`);
    }else{
      this.setState({error:'Preencha os dados'});
    }

    event.preventDefault();
  }

  render(){
    return(
      <div>
        <h1>Novo usuário</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <div>
            <label>Nome: </label>
            <input 
              type='text' 
              value={this.state.nome}
              onChange={(e)=>{this.setState({nome:e.target.value})}}
            />
          </div>
          <br/>
          <div>
            <label>Email: </label>
            <input 
              type='text' 
              value={this.state.email}
              onChange={(e)=>{this.setState({email:e.target.value})}}
            />
          </div>
          <br/>
          <div>
            <label>Senha: </label>
            <input 
              type='password' 
              value={this.state.senha}
              onChange={(e)=>{this.setState({senha:e.target.value})}}
            />
          </div>
          <br/>
          <button type='submit'>Cadastrar: </button>
        </form>
      </div>
    );
  }
}

export default App;