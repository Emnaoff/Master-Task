import {SIGNIN,SIGNUP,GET_MEMBER,GET_MEMBERLIST,TOGGLE_FALSE,TOGGLE_TRUE } from '../constantes/action-types';
import axios from 'axios';


//Exporting my SIGNIN Action
export const signIn = (userData)=>async(dispatch) =>{
    try {
        const user = await axios.post('http://localhost:8000/signin',userData);
        dispatch({
            type:SIGNIN,
            payload:user.data
        })
        
    } catch (error) {
        console.log(error)
    }

}


//Exporting my SIGNUP Action
export const signUp = (userData)=>async(dispatch) =>{
    try {
        const user = await axios.post('http://localhost:8000/signup',userData);
        dispatch({
            type:SIGNUP,
            payload:user.data
        })
        
    } catch (error) {
        console.log(error)
    }

}


//Exporting my MEMBERLIST Action
export const getMemberList=()=>  async (dispatch)=>{
    try {
       
        const res=  await axios.get('http://localhost:8000/members/getMemberList')
    
    dispatch({type:GET_MEMBERLIST, payload:res.data.memberList})
    
    
    } catch (error) {
        console.log(error)
    }
    }



//Exporting my ADDING A MEMBER Action
export const addMember=(newMember)=>  async (dispatch)=>{

    try {
        
const res=  await  axios.post('http://localhost:8000/members/addMember',newMember )

dispatch(getMemberList())

    } catch (error) {
        console.log(error)
    }

}



//Exporting my DELETING A MEMBER Action
export const deleteMember=(id)=>async(dispatch)=>{
    try {
        const res=  await axios.delete(`http://localhost:8000/members/${id}`)
        dispatch(getMemberList())
    } catch (error) {
        console.log(error)
        
    }
    }

  //Exporting my GETTING A MEMBER Action
    export const getMember=(id)=>async(dispatch)=>{

        try {
            const res=  await axios.get(`http://localhost:8000/members/${id}`)
            dispatch({type:GET_MEMBER, payload:res.data.memberList})
            
        } catch (error) {
            console.log(error)
        }
    }
    



//Exporting my TOGGLE TRUE Action
    export const toggletrue = () =>{
     return {  type:TOGGLE_TRUE}
    }




//Exporting my TOGGLE FALSE Action
    export const togglefalse = () =>{
        return {  type:TOGGLE_FALSE}
       }



//Exporting my EDITING A MEMBER Action
       export const editMember=(id,newMember)=>async(dispatch)=>{
        try {
            const res= await axios.put(`http://localhost:8000/members/${id}`,newMember)
            dispatch(getMemberList())

        } catch (error) {
            console.log(error)
        }
           }






