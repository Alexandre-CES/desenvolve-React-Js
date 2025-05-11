import Nome from "../nome";
import { useContext } from "react";
import { UserContext } from "../../context/user";

function Alunos(){

    const {qtdAlunos} = useContext(UserContext)

    return(
        <div>
            <h2>Quantidade de alunos: {qtdAlunos}</h2>
            <Nome/>
        </div>
    );
} 

export default Alunos;