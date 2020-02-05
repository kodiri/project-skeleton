import React from 'react';
import './App.css';
import UserList from './components/UserList';
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
          <Route path="/user-list">
            <UserList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
