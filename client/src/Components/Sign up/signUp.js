import React, {useState}from 'react';
import './signUp.scss';
import {useDispatch} from 'react-redux';
import {signUp} from '../../redux/actions/action';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function SignUp() {

  const dispatch= useDispatch();
  const [projectName,setProjectName] =useState('');
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');

  const sendSignUp=()=>{
dispatch(signUp({projectName,email,password}))
alert('Registred successfully!');
  }

  return (
    <div className="signupContainer">
    

 <div class="page">
        <h3>Sign Up and join the adventure !</h3>
  
        <label class="field field_v2">
    <input class="field__input" placeholder="e.g. Melnikov" onChange={(e)=>setProjectName(e.target.value)} />
    <span class="field__label-wrap">
      <span class="field__label">Project name</span>
    </span>
  </label> 
  <label class="field field_v3">
    <input class="field__input" placeholder="e.g. melnik909@ya.ru" onChange={(e)=>setEmail(e.target.value)}/>
    <span class="field__label-wrap">
      <span class="field__label">E-mail</span>
    </span>
  </label>
  <label class="field field_v2">
    <input class="field__input" placeholder="e.g. Melnikov" onChange={(e)=>setPassword(e.target.value)} />
    <span class="field__label-wrap">
      <span class="field__label">Password</span>
    </span>
  </label> 
</div>
<br/> <br/>
<Button variant="secondary" className="signupButton" onClick={sendSignUp}><Link to={'/DashOwner'} style={{textDecoration: 'none', color: "white"}}>Sign Up</Link></Button>

</div>

    
  )
}

export default SignUp