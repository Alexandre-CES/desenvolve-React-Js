import { Link } from "react-router-dom";

function Sobre(){
  return(
    <div>
        <h1>Página Sobre</h1>
        <br/>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Sobre;