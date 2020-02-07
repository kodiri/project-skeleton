import React from 'react';
import './App.css';
import UserList from './components/UserList';
import Header from './components/Header/Header';
import UserRegistration from './components/UserRegistration/UserRegistration'
import UserLogin from './components/UserLogin/UserLogin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header username="test" />
      <Router>
        <Switch>
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
