import React from 'react';
import './dashOwner.scss';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

function dashOwner() {
    return (
      <div className="dashOwner-container">
  
  
  
  <div className="sidebarContent">
          <aside className="sidebar">
            <nav className="nav">
              <ul className="dash-icon">
                <li className="dash-item"><Link to="/DashEmployee"><i class="fa-solid fa-chalkboard-user"></i>Dashboard</Link></li>
                <li className="dash-item"><Link to="/dashWork"><i class="fa-solid fa-briefcase"></i>Workload</Link></li>
                <br/> <br/> <br/> <br/>
                <li className="dash-item"> <Link to="/dashAccount"><i class="fa-solid fa-user"></i>Account</Link></li>
              </ul>
            </nav>
          </aside>
  
          </div>
          <div className="homeContent">
            <h1>
           Welcome to Task Master!</h1>
          <h2> What have planned for today ?</h2>
          <Button variant="secondary"><Link className="return" to ='/'style={{textDecoration: 'none', color: "white"}} >Return to the Home Page</Link></Button>
          </div>
        </div>
      );
    
    }
    
  
  
  export default dashOwner