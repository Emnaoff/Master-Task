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
              <li className="dash-item"><Link to="/DashOwner"><i class="fa-solid fa-chalkboard-user fa-2x"></i>Dashboard</Link></li>
              <li className="dash-item"><Link to="/dashMembers"><i class="fa-solid fa-users fa-2x"></i>Members</Link></li>
              <li className="dash-item"><Link to="/dashWork"><i class="fa-solid fa-briefcase fa-2x"></i>Workload</Link></li>
              <li className="dash-item"><Link to="/dashCalendar"><i class="fa-solid fa-calendar-days fa-2x"></i>Calendar</Link></li>
              <br/> <br/> <br/> <br/>
              {/* <li className="dash-item"> <Link to="/dashAccount"><i class="fa-solid fa-user fa-2x"></i>Account</Link></li> */}
            </ul>
          </nav>
        </aside>

        </div>
        <div className="homeContent">
          <h1>
         Welcome to Task Master!</h1>
        <h2> Continue managing your projects !</h2>
        <br/> <br/> <br/>
        <Button variant="secondary"><Link className="return" to ='/'style={{textDecoration: 'none', color: "white"}} >Return to the Home Page</Link></Button>
        </div>
      </div>
    );
  
  }
  


export default dashOwner