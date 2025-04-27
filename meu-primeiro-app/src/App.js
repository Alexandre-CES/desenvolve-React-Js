import React, {Component} from "react"
import Membro from "./Components/Membro";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome:''
    };
  }

  render(){
    return(
      <div>
        <Membro nome='Visitante'/>
        
      </div>
    )
  }
}

export default App;