// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import CalendarView from './components/CalendarView';
import ErrorReport from './components/ErrorReport';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>NSCC Clock-In Application</h1>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/calendar" component={CalendarView} />
          <Route path="/report-error" component={ErrorReport} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
