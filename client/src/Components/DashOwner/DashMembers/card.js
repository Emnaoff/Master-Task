import React from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMember, getMember, toggletrue } from '../../../redux/actions/action';
import './dashMembers.scss';


function Card({el}) {
    const dispatch=useDispatch()

  return (
    <div className="containerCard" style={{padding:"50px"}}>
        <div class="profile" style={{backgroundImage: `url(${el.picture})`}} >
        <div class="overlay">
            <div class="about d-flex flex-column"> 
                {/* Here goes the full name */}
                <h4 >{el.fullName}</h4> 
                 {/*Here goes the position */}
                 <span>{el.position}</span>
                <br/> 
                <span>{el.email}</span>
            </div>
            <ul class="social-icons">

                {/* here goes the edit button */}
                 <li> <Link to='/editMember' ><i class="fa-solid fa-user-pen fa-2x" onClick={()=> {dispatch(getMember(el._id)) ;dispatch(toggletrue())}}></i> </Link></li>
            
            {/* here goes the delete button */}
             <li> <i class="fa-solid fa-user-minus fa-2x" onClick={()=>dispatch(deleteMember(el._id)) }></i> </li> 
              
              </ul>
        </div> 

    </div> 

    </div>
  )
}

export default Card