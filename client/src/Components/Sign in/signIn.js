import React,{useState} from 'react';
import   './signIn.scss';
import {Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {signIn} from '../../redux/actions/action';
import {Link} from 'react-router-dom';




function Register() {
  
  const dispatch=useDispatch();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const submit = () => {
    dispatch(signIn({email,password}))
    alert('logged in successfully!');
  }

   

  return (
    <div className='signIn-container'>
    <div class="page">
        <h3>Sign In</h3>
  
     
  <label class="field field_v3">
    <input class="field__input" placeholder="e.g. melnik909@ya.ru" onChange={(e)=>setEmail(e.target.value)}/>
    <span class="field__label-wrap">
      <span class="field__label">E-mail</span>
    </span>
  </label>
  <label class="field field_v2">
    <input class="field__input" placeholder="e.g. Melnikov" onChange={(e)=>setPassword(e.target.value)}/>
    <span class="field__label-wrap">
      <span class="field__label">Password</span>
    </span>
  </label> 
</div>
<br/> <br/>
<Button variant="secondary" className="signinButton" onClick={submit}> <Link to={'/DashOwner'} style={{textDecoration: 'none', color: "white"}}>Sign In</Link></Button>

    </div>
  )
}

export default Register;
