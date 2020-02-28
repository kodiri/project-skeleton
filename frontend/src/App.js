import React from 'react';
import './App.css';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import UserRegistration from './components/RegistrationForm'
import UserLogin from './components/UserLogin';
import Join from './components/Chat/Join/Join';
import Chat from './components/Chat/Chat/Chat';
import FeedForm from './components/FeedForm';
import Feeds from './components/Feeds';
import HomeBody from './components/HomeBody';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/join" component={Join} />
          <Route exact path="/chat" component={Join} />
          <Route exact path="/wall">
            <FeedForm />
            <Feeds />
          </Route>
          <Route path="/profile/:name">
            <UserProfile />
          </Route>
          <Route path="/register">
            <UserRegistration />
          </Route>
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/" component={HomeBody} />
          <Route exact path="/header" component={Header} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
