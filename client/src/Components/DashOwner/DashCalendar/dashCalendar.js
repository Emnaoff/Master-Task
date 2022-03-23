import React,{useState,useRef} from 'react';
import './dashCalendar.scss';
import {Link} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {Button} from 'react-bootstrap';
import AddEventModal from './AddEventModal';
import axios from 'axios';
import moment from 'moment';



function DashCalendar() {

  const [modalOpen,setModalOpen]= useState(false);
  const [events,setEvents] = useState([])
  const calendarRef= useRef(null);
  const onEventAdded = event =>{
    let calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent({
      start:moment(event.start).toDate(),
      end:moment(event.end).toDate(),
      title:event.title
    })
  }
 
  const handleEventAdd = async (data)=> {
   await axios.post('/calendar/addToCalendar' , data.event);

  }

  const handleDatesSet = async (data)=> {
    const response = await axios.get('/calendar/getToCalendar?start='+moment(data.start).toISOString()+'&end='+moment(data.end).toISOString());
    setEvents(response.data);
   }



  return (
    <div className="Calendar-Container">
      <div className="sidebarContent">
        <aside className="sidebar">
          <nav className="nav">
            <ul className="dash-icon">
              <li className="dash-item"><Link to="/DashOwner"><i class="fa-solid fa-chalkboard-user fa-2x"></i>Dashboard</Link></li>
              <li className="dash-item"><Link to="/dashMembers"><i class="fa-solid fa-users fa-2x "></i>Members</Link></li>
              <li className="dash-item"><Link to="/dashWork"><i class="fa-solid fa-briefcase fa-2x"></i>Workload</Link></li>
              <li className="dash-item"><Link to="/dashCalendar"><i class="fa-solid fa-calendar-days fa-2x"></i>Calendar</Link></li>
            {/* <li className="dash-item"> <Link to="/dashAccount"><i class="fa-solid fa-user fa-2x"></i>Account</Link></li> */}
            <br/> <br/> <br/>
            <Button className="add-event-button" variant="secondary" onClick={()=>setModalOpen(true)}>Add Event</Button>
             
            
            </ul>
            
          </nav>
          
        </aside>
        
</div>

        <div className="MyCalendar" style={{position: 'relative', zIndex: 0}}>
     <FullCalendar
        ref={calendarRef}
        events={events}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        eventAdd={event=> handleEventAdd(event)}
        datesSet={date=> handleDatesSet(date)}
      />
       </div>
       <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)} />
    </div>
  )
}

export default DashCalendar