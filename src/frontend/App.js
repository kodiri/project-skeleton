import React from 'react';
import './App.css';
import UserList from './components/UserList';
import UserRegistration from './components/UserRegistration/UserRegistration'
import UserLogin from './components/UserLogin/UserLogin'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
        // <Route path="/" exact component={Join}/>
        <Route path="/" component={Chat}/>
          <Route path="/user-list">
            <UserList />
          </Route>
          <Route path="/register">
            <UserRegistration />
          </Route>
          <Route path="/login">
            <UserLogin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
