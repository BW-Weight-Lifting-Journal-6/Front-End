import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

import SignUpForm from './components/SignupForm';
import Login from './pages/Login';

function App() {
  return (
    <div >
      <Router>
      <Switch>
        <Route path='/' component={SignUpForm}/>
        <Route path='/login' component={Login}/>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
