import React, {Component} from "react"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      email:'teste@gmail.com',
      senha:'123456',
      sexo:''
    };

    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeSexo = this.changeSexo.bind(this);
  }

  changeEmail(e){
    let valorDigitado = e.target.value;
    this.setState({email:valorDigitado})
  }

  changePassword(e){
    let valorDigitado = e.target.value;
    this.setState({senha:valorDigitado})
  }

  changeSexo(e){
    let valorDigitado = e.target.value;
    this.setState({sexo:valorDigitado})
  }

  render(){
    return(
      <div>
        <h1>Tela de login</h1>
        <div>
          <label>Email:</label>
          <input type='email' name='email' value={this.state.email} onChange={this.changeEmail}/>
        </div>
        <div>
          <label>Senha:</label>
          <input type='password' name='senha' value={this.state.senha} onChange={this.changePassword}/>
        </div>
        <div>
          <label>Sexo:</label>
          <select value={this.state.sexo} onChange={this.changeSexo}>
            <option value='m'>masculino</option>
            <option value='f'>feminino</option>
          </select>
        </div>

        <h2>{this.state.email}</h2>
        <h2>{this.state.senha}</h2>
        <h2>{this.state.sexo}</h2>
      </div>
    );
  }
}

export default App;