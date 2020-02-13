import React from 'react';
import './App.css';
import UserList from './components/UserList/UserList';
//import Header from './components/Header/Header';
import UserRegistration from './components/UserRegistration/UserRegistration'
import UserLogin from './components/UserLogin/UserLogin';
import Join from './components/ChatModule/Join/Join';
import Chat from './components/ChatModule/Chat/Chat';
import Wall from './components/Wall/Wall';
import PersonalPage from './components/PersonalPageModule/PersonalPage/PersonalPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        {/* <Header username="test" /> */}
        <Switch>
          <Route exact path="/join" component={Join} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/wall" component={Wall} />
          <Route exact path="/PersonalPage" component={PersonalPage} />
          <Route path="/user-list">
            <UserList />
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
    </div>
  );
}

export default App;
