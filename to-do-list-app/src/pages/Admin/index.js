import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../firebaseConnection';
import * as Icon from 'react-bootstrap-icons';
import { addDoc, collection } from 'firebase/firestore';

function Admin() {

    const [taskInput,setTaskInput] = useState('');
    const [user,setUser] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        async function loadTarefas(){
            const userDetail = localStorage.getItem('@detailUser');
            setUser(JSON.parse(userDetail));
        }

        loadTarefas();
    },[]);

    async function handleRegister(e){
        e.preventDefault();

        if(taskInput === ''){
            alert('Digite uma tarefa');
            return;
        }else{
            await addDoc(collection(db,'tarefas'), {
                tarefa:taskInput,
                created: new Date(),
                userUid: user?.uid
            }).then(()=>{
                setTaskInput('');

            }).catch((err)=>{
                console.log('erro ao cadastrar: '+err);
            })
        }
    }

    async function handleLogout(e){
        await signOut(auth);
    }

    

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                <h1 className='text-center'>
                    <Icon.CardChecklist className='me-3' color='royalblue' size='38'/>
                    ToDo List
                </h1>

                <div className='card shadow mt-5'>
                    <div className='card-header text-center'>
                    <h4>Lista de Tarefas</h4>
                    </div>
                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <input type='text' id='taskinput' className='form-control' placeholder='Adicionar nova tarefa' 
                            value={taskInput} onChange={(e)=>setTaskInput(e.target.value)}/>
                            <button className='btn btn-primary' onClick={(e)=>handleRegister(e)}>Adicionar</button>
                        </div>
                        <ul className='list-group'>
                            <li className='list-group-item d-flex justify-content-between align-items-center'>
                                Estudar JavaScript
                                <div>
                                    <button className='btn btn-warning btn-sm me-2'>
                                        <Icon.PencilSquare/>
                                    </button>
                                    <button className='btn btn-success btn-sm me-2'>
                                        <Icon.CheckSquare/>
                                    </button>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div className='card-footer text-center'>
                        <button className='btn btn-secondary btn-sm' onClick={handleLogout}>
                            <Icon.DoorClosed/> Fazer Logout
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
