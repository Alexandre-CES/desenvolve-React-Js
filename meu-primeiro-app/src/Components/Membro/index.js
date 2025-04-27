import React, {Component} from 'react';

class Membro extends Component{
    constructor(props){
        super(props);
        this.state = {
          nome:props.nome
        };

        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar(){
        this.setState({nome:'Lucas'})
    }

    sair(){
        this.setState({nome:'Visitante'})
    }

    render(){
        return(
            <div>
                <h1>Bem Vindo {this.state.nome}</h1>
                <button onClick={this.entrar}>Entrar como Lucas</button>
                <button onClick={this.sair}>Sair</button>
            </div>
        );
    };
}

export default Membro;