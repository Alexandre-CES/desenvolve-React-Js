import React, {Component} from "react"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      form:{
        email:'teste@gmail.com',
        senha:'123456',
        sexo:''
      }
      
    };

    this.changeForm = this.changeForm.bind(this);
  }

  changeForm(e){
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({form:form});
  }

  render(){
    return(
      <div>
        <h1>Tela de login</h1>
        <div>
          <label>Email:</label>
          <input type='email' name='email' value={this.state.form.email} onChange={this.changeForm}/>
        </div>
        <div>
          <label>Senha:</label>
          <input type='password' name='senha' value={this.state.form.senha} onChange={this.changeForm}/>
        </div>
        <div>
          <label>Sexo:</label>
          <select name='sexo' value={this.state.form.sexo} onChange={this.changeForm}>
            <option value='m'>masculino</option>
            <option value='f'>feminino</option>
          </select>
        </div>

        <h2>{this.state.form.email}</h2>
        <h2>{this.state.form.senha}</h2>
        <h2>{this.state.form.sexo}</h2>
      </div>
    );
  }
}

export default App;