import React from 'react';
import './dashWork.scss';
import {Link} from 'react-router-dom';

function dashWork() {
  return (
    <div>
       <div className="sidebarContent">
        <aside className="sidebar">
          <nav className="nav">
            <ul className="dash-icon">
              <li className="dash-item"><Link to="/DashOwner"><i class="fa-solid fa-chalkboard-user"></i>Dashboard</Link></li>
              
              <li className="dash-item"><Link to="/dashWork"><i class="fa-solid fa-briefcase"></i>Workload</Link></li>
              
              <br/> <br/> <br/> <br/>
              <li className="dash-item"> <Link to="/dashAccount"><i class="fa-solid fa-user"></i>Account</Link></li>
            </ul>
          </nav>
        </aside>

        </div>
    </div>
  )
}

export default dashWork