import { useContext } from "react";
import { UserContext } from "../../context/user";

function Nome(){

    const {alunos,setAlunos} = useContext(UserContext);

    return(
        <div>
            <span>Seja Bem Vindo {alunos}!</span><br/>
            <button onClick={()=>setAlunos('Matheus')}>Trocar nome</button>
        </div>
    );
}

export default Nome;