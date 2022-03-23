import React, { Fragment, useState } from 'react';
import './dashWork.scss';
import {Link} from 'react-router-dom';
import Message from './message';
import Progress from './progress';
import FileList from './fileList';
import axios from 'axios';


function DashWork() {





  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);




  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };






  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });



         
      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Successfully Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
    }
  };


  return (
    <div className="file-Container">


       {/* My side NavBar */}
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
<div className="fragment-container">
<Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
    </Fragment>


{/* Work list */}
{/* <FileList/> */}

    </div>
    </div>
  )
}

export default DashWork