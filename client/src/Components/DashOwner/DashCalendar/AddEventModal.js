import React, {useState} from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import {Button} from 'react-bootstrap';
import './dashCalendar.scss';


function AddEventModal({isOpen, onClose , onEventAdded}) {
    const [title,setTitle]= useState('');
    const [start,setStart]= useState(new Date());
    const [end,setEnd]= useState(new Date());


    const onSubmit = (event)=>{
     event.preventDefault();
     onEventAdded({
         title,
         start,
         end
     })
     onClose();
    }

  return (
    <div>
     <Modal  isOpen={isOpen} onRequestClose={onClose}>  
<form onSubmit={onSubmit}>
        <label className="title">Title</label>
        <br/>

        <input className="inputTitle" placeholder="Title" value={title} style={{border: "solid" ,borderColor: '#c3c9cb',borderWidth:'1px'}} onChange={e => setTitle(e.target.value)} /> 
<br/> <br/> <br/><br/> <br/> <br/>
      <div>
             <label className="startDate">Start Date</label>
             <Datetime value={start} onChange={date => setStart(date)} />
    </div>

   <br/> <br/> <br/> <br/>

    <div>
             <label className="endDate">End Date</label>
             <Datetime value={end} onChange={date => setEnd(date)} />
    </div>

      <br/> <br/>
    <Button variant="secondary" className="add-event-modal" onClick={onSubmit}>Add Event</Button>

</form>


</Modal>
</div>
  )
}

export default AddEventModal