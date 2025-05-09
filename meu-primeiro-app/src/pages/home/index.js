import { Link } from "react-router-dom";

function Home(){
  return(
    <div>
        <h1>Página Home</h1>
        <br/>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Home;