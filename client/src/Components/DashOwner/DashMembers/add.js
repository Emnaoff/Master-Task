import { useEffect, useState } from "react";
import './dashMembers.scss';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addMember, editMember } from "../../../redux/actions/action";
import {Button,Form,Row,InputGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Add() {
    

    const [fullName, setFullName]=useState("")
    const [email, setEmail]=useState("")
    const [position, setPosition]=useState("")
    const [picture, setPicture]=useState("")

    const dispatch= useDispatch()
    const history= useHistory()
    const OneMember= useSelector(state=>state.memberReducer.member)
    const edit= useSelector(state=>state.memberReducer.edit)

useEffect(()=>{
    if(edit) {setFullName(OneMember.fullName) ;setPosition(OneMember.position); setEmail(OneMember.email) ; setPicture(OneMember.picture) }
    else {setFullName("") ; setPosition(""); setEmail("") ; setPicture("") }}, [])

    return(
<div class="containerAdd">
            <h1 style={{color:"#4F77AA"}}>The more the merrier !</h1>
            <br/>
    <Form noValidate >
      <Row className="mb-3">
        <Form.Group  md="4" controlId="validationCustom01">
          <Form.Label >Fullname</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Fullname"
            value={fullName}   onChange={(e)=>setFullName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group  md="4" controlId="validationCustom02">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Position"
            value={position} onChange={(e)=>setPosition(e.target.value)} 
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <br/>
        <Form.Group  md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup >
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="email"
              aria-describedby="inputGroupPrepend"
              value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please add an email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <br/>

      <Row className="mb-3">
        <Form.Group  md="6" controlId="validationCustom03">
          <Form.Label>Picture</Form.Label>
          <Form.Control type="text" placeholder="Picture" value={picture}  onChange={(e)=>setPicture(e.target.value)} />
        </Form.Group>
        
        </Row>
        
        </Form>
        <Link className="return" to ='/dashMembers'><Button style={{backgroundColor:"#057476",marginRight:"200px"}}>Return</Button></Link>

    {edit? <Button variant="secondary" onClick={()=>{dispatch(editMember(OneMember._id,{fullName,email,position,picture})) ; history.push('/memberList')} }> Edit</Button> : 

     <Button style={{backgroundColor:"#11253f"}} onClick={()=>{dispatch(addMember({fullName,email,position,picture})) ; history.push('/dashMembers') } } >Add</Button> 
     
      }

</div>












    )
}
export default Add