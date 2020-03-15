import React, {Component} from 'react';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {withAutorization, AuthProvider} from './autorization';

import * as ROUTES from './Routes';


class App extends Component {
  render() {
      
      return (
      <Router>
        <AuthProvider>
        
          <Navigation/>
          
          <Route exact path = {ROUTES.HOME}> 
              <Home2/>
          </Route>
          
           <Route exact path = {ROUTES.SIGNIN}> 
             <SignIn/>
          </Route>
          
          <Route exact path = {ROUTES.SIGNUP}> 
             <SignUp/>
          </Route>
          
          </AuthProvider>
          
      </Router>
      )
  }
}
export default App;



const Home2 = withAutorization (Home);




