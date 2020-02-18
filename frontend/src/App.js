import React from 'react';
import './App.css';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import UserRegistration from './components/RegistrationForm'
import UserLogin from './components/UserLogin';
import Join from './components/ChatForm';
// import Chat from './components/ChatModule/Chat/Chat';
import Wall from './components/Wall';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/join" component={Join} />
          {/* <Route exact path="/chat" component={Chat} /> */}
          <Route exact path="/wall" component={Wall} />
          <Route path="/profile/:name">
            <UserProfile />
          </Route>
          <Route path="/register">
            <UserRegistration />
          </Route>
          <Route path="/login">
            <UserLogin />
          </Route>
          <Route exact path="/" component={UserLogin} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
