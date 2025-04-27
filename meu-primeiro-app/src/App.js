import React, {Component} from "react"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      hora: '00:00:00'
    };

    
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({hora: new Date().toLocaleTimeString()})
    }, 1000);
  }

  componentDidUpdate(){
    console.log('Atualizou a hora');
  }
  
  render(){
    return(
      <div>
        <h1>Ciclo de vida dos componentes</h1>
        <h2>{this.state.hora}</h2>
      </div>
    )
  }
}

export default App;