import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../firebaseConnection';
import * as Icon from 'react-bootstrap-icons';
import { doc, addDoc, deleteDoc, collection, onSnapshot, orderBy, query, where, updateDoc } from 'firebase/firestore';

function Admin() {

    const [taskInput,setTaskInput] = useState('');
    const [user,setUser] = useState({});
    const [tarefas,setTarefas] = useState([]);
    const [edit,setEdit] = useState({});

    useEffect(()=>{
        async function loadTarefas(){
            const userDetail = localStorage.getItem('@detailUser');
            setUser(JSON.parse(userDetail));

            if(userDetail){
                const data = JSON.parse(userDetail);

                const tarefaRef = collection(db, 'tarefas');
                const q = query(tarefaRef, orderBy('created','desc'),where('userUid','==',data?.uid));
                const unsub = onSnapshot(q,(snapshot)=>{
                    let lista = [];
                    snapshot.forEach((doc)=>{
                        lista.push({
                            id:doc.id,
                            tarefa:doc.data().tarefa,
                            userUid:doc.data().userUid
                        });
                    })
                    setTarefas(lista);
                });
            }
        }

        loadTarefas();
    },[]);

    async function handleRegister(e){
        e.preventDefault();

        if(taskInput === ''){
            alert('Digite uma tarefa');
            return;
        }

        if(edit?.id){
            handleUpdateTask();
            return;
        }

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

    async function checkTask(id){
        const docRef = doc(db,'tarefas',id);

        await deleteDoc(docRef);
    }

    async function editTask(item){
        setTaskInput(item.tarefa);
        setEdit(item);
    }

    async function handleUpdateTask(){
        const docRef = doc(db, 'tarefas', edit.id);

        updateDoc(docRef, {
            tarefa:taskInput
        }).then(()=>{
            setTaskInput('');
            setEdit({});
        }).catch((err)=>{
            console.log('erro ao atualizar a tarefa:' +err);
            setTaskInput('');
            setEdit({});
        })
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
                            <input type='text' id='taskinput' className='form-control' placeholder='Adicionar nova tarefa' value={taskInput} onChange={(e)=>setTaskInput(e.target.value)}/>

                            {
                                Object.keys(edit).length>0 ? (
                                    <button className='btn btn-warning' onClick={(e)=>handleRegister(e)}>Atualizar</button>
                                ):(
                                    <button className='btn btn-primary' onClick={(e)=>handleRegister(e)}>Adicionar</button>
                                )
                            }

                            
                        </div>
                        <ul className='list-group'>

                            {tarefas.map((item)=>{
                                return(
                                    <li key={item.id} className='list-group-item d-flex justify-content-between align-items-center'>
                                        {item.tarefa}
                                        <div>
                                            <button className='btn btn-warning btn-sm me-2' onClick={()=>editTask(item)}>
                                                <Icon.PencilSquare/>
                                            </button>
                                            <button className='btn btn-success btn-sm me-2' onClick={()=>checkTask(item.id)}>
                                                <Icon.CheckSquare/>
                                            </button>
                                        </div>
                                    </li>
                                )
                            })}
                            
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
