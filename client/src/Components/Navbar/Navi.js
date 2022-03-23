
import React  from 'react';
import './Navi.scss';
import {Link as LinkS } from 'react-scroll';

import { Link} from "react-router-dom";






function Navi() {

  
  
    
 
  return (
  
       <div id='naviContainer'>
<ul class="navList">
<li className="nav-item"> <LinkS activeClass="active" to="entrance" smooth={true}>Home</LinkS></li>
<li className="nav-item"> <LinkS to='#services_anchor'spy={true} smooth={true}>Our Services</LinkS></li>
 <li className="nav-item"> <LinkS to='story'spy={true} smooth={true}>About Us</LinkS></li>
 <li className="nav-item"> <LinkS to='partners'spy={true} smooth={true}>Partners</LinkS></li>
 <li className="nav-item"> <LinkS to='mail'spy={true} smooth={true}>Contact Us</LinkS></li>

<li className="nav-item"><Link to="/signUp" style={{textDecoration: 'none', color: "white"}}>Sign Up</Link></li>
<li className="nav-item"><Link to="/signIn" style={{textDecoration: 'none', color: "white"}}>Sign In</Link></li>

</ul> 
        


 </div>  



    
  )

  }



  

export default Navi