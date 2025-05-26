import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConnection';

function Register() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  async function handleRegister(e){
    e.preventDefault();

    if(email != '' && password != ''){
      await createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
          navigate('/admin',{replace:true});
        }).catch((err)=>{
          console.log('error: '+err);
        });
    }else{
      alert('Preencha os campos');
    }
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
              <h4>Cadastro</h4>
            </div>
            <div className='card-body'>
              <form onSubmit={handleRegister}>
                <div className='mb-3'>
                  <label className='form-label'>Email</label>
                  <input type='email' className='form-control' placeholder='Digite seu email'
                  value={email} onChange={(e)=>setEmail(e.target.value)}/>

                </div>
                <div className='mb-3'>
                  <label className='form-label'>Senha</label>
                  <input type='password' className='form-control' placeholder='Digite sua senha'
                  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-primary w-100'>Cadastrar</button>
              </form>
              <p className='text-center mt-3'>
                {'Já tem uma conta? '} 
                <Link to='/'>Faça o login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
