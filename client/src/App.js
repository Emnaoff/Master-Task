import './App.css';
import {Route,Switch} from 'react-router-dom';
import SignIn from './Components/Sign in/signIn';
import SignUp from './Components/Sign up/signUp';
import Homee  from './Components/Home/home';



import DashMembers from './Components/DashOwner/DashMembers/dashMembers';
import DashWork from './Components/DashOwner/DashWork/dashWork';
import DashCalendar from './Components/DashOwner/DashCalendar/dashCalendar';
// import DashAccount from './Components/DashOwner/DashAccount/dashAccount';
import DashOwner from './Components/DashOwner/dashOwner';
// import List from './Components/DashOwner/DashMembers/list';
import Add from './Components/DashOwner/DashMembers/add'

import Modal from 'react-modal';
Modal.setAppElement('#root');






function App() {

  return (
    <div className="App">
    
<Switch>
      <Route exact path='/'  component={Homee}   />
      <Route path='/signIn'  component={SignIn}   />
      <Route  path='/signUp'  component={SignUp}   />
      <Route path='/DashOwner' component={DashOwner} />
      <Route  path='/dashMembers'  component={DashMembers}   />
      <Route  path='/dashWork'  component={DashWork}   />
      <Route  path='/dashCalendar'  component={DashCalendar}   />
      {/* <Route  path='/dashAccount'  component={DashAccount}   /> */}
      {/* <Route  path='/memberList'   component= {List} /> */}
      <Route  path='/addMember' component={Add} />
      <Route  path='/editMember' component={Add} />
      
 </Switch>


   
          
    
      {/* <Route exact path='/members'  component={MemberList}   />
      <Route exact path='(/addMember|/editMember)'  component={AddMember}   /> */}



  
    </div>
  );
}

export default App;
