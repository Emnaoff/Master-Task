import React from 'react';
import './dashMembers.scss';
import {Link} from 'react-router-dom';
import { getMemberList, togglefalse } from "../../../redux/actions/action";
import {useDispatch} from 'react-redux'
import { Button } from 'react-bootstrap';
import List from './list';


function DashMembers() {
  const dispatch= useDispatch();

  return (
    <div className="Members-Container">
      

         <div className="sidebarContent">
        <aside className="sidebar">
          <nav className="nav">
            <ul className="dash-icon">
              <li className="dash-item"><Link to="/DashOwner"><i class="fa-solid fa-chalkboard-user fa-2x"></i>Dashboard</Link></li>
              <li className="dash-item"><Link to="/dashMembers" onClick={()=> dispatch(getMemberList()) }> <i class="fa-solid fa-users fa-2x" ></i>Members</Link>  </li>
              <li className="dash-item"><Link to="/dashWork"><i class="fa-solid fa-briefcase fa-2x"></i>Workload</Link></li>
              <li className="dash-item"><Link to="/dashCalendar"><i class="fa-solid fa-calendar-days fa-2x"></i>Calendar</Link></li>
              <br/> <br/> <br/> <br/>
              {/* <li className="dash-item"> <Link to="/dashAccount"><i class="fa-solid fa-user fa-2x"></i>Account</Link></li> */}
            </ul>
          </nav>
        </aside>
       </div>


       <div className="myMemberList">
<ul>
{/* <Link to='/memberList'  onClick={()=> dispatch(getMemberList()) } ><Button variant="secondary">Members</Button></Link> */}
</ul>
<Link to='/addMember' onClick={()=>  dispatch(togglefalse()) }   ><Button  style={{marginLeft:"350px",height:"80px",backgroundColor:"#4F77AA"}}>Add a new Member</Button></Link>
<List/>
</div>

    </div>
  )
}

export default DashMembers