import React from 'react';
import {Route,Switch} from 'react-router-dom';
import SignIn from './Sign in/signIn';
import SignUp from './Sign up/signUp';



function home() {
  return (
    <div>
     
        <Switch>
     <Route path='/signIn' exact><SignIn/></Route>
     <Route path='/signUp'><SignUp/></Route>
     </Switch>
    
    </div>
  )
}

export default home