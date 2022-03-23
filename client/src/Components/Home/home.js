import React from 'react';
import videos from '/Users/macbookair/Desktop/Master Task/client/src/Components/Improve your project management . (1).mp4';
import Navi from '../Navbar/Navi';
import Services from '../Services/Services';
import About from '../About/About';
import Contact from '../Contact Us/contact';
import End from '../End/end';
import Mail  from '../Mail/Mail';
import Top from '../Top/Top';
import './home.scss';

function home() {
  return (
    <div>

<Top/>

<Navi/>


<div className='whole' >
<video className="entrance" loop autoPlay muted   >
<source src={videos} type="video/mp4"/>
</video>


<Services/>

<div className="backg-1">
</div>


<About/> 


<Contact/>


<div className="backg-2">
</div>


<Mail/>

<End/>  
</div> 
    </div>
  )
}

export default home