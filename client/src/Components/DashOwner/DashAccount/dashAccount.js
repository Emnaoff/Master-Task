import React from 'react';
import './dashAccount.scss';
import {Link} from 'react-router-dom';

function dashAccount() {
  return (
    <div>
<div className="sidebarContent">
        <aside className="sidebar">
          <nav className="nav">
            <ul className="dash-icon">
              <li className="dash-item"><Link to="/DashOwner"><i class="fa-solid fa-chalkboard-user fa-2x"></i>Dashboard</Link></li>
              <li className="dash-item"><Link to="/dashMembers"><i class="fa-solid fa-users fa-2x "></i>Members</Link></li>
              <li className="dash-item"><Link to="/dashWork"><i class="fa-solid fa-briefcase fa-2x"></i>Workload</Link></li>
              <li className="dash-item"><Link to="/dashCalendar"><i class="fa-solid fa-calendar-days fa-2x"></i>Calendar</Link></li>
              <br/> <br/> <br/> <br/>
              <li className="dash-item"> <Link to="/dashAccount"><i class="fa-solid fa-user fa-2x"></i>Account</Link></li>
            </ul>
          </nav>
        </aside>

        </div>

    </div>
  )
}

export default dashAccount