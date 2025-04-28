import React, {Component} from "react"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      feed:[
        {
          id:1,
          username:'Lucas',
          likes:10, 
          comments:3
        },
        {
          id:2,
          username:'Robson',
          likes:25, 
          comments:6
        },
        {
          id:3,
          username:'Douglas',
          likes:52, 
          comments:9
        },
        {
          id:4,
          username:'Pedro',
          likes:1, 
          comments:1
        },
      ]
    };
  }

  render(){
    return(
      <div>
        {
          this.state.feed.map((item)=>{
            return(
              <div key={item.id}>
                <h3>{item.username}</h3>
                <a>
                  {
                    item.likes > 1 ? 
                    item.likes + ' curtidas' : 
                    item.likes + ' curtida'
                  }
                </a> 
                 \ 
                <a>
                  {
                    item.comments > 1 ? 
                    item.likes + ' comentários' :
                    item.comments + ' comentário'
                  }
                </a>
                <hr/>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;