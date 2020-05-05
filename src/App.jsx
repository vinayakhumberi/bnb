import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import {
  PrivateRoute,
  LoginRoute
} from './utils/route.util';
import LoginPage from './Views/LoginPage/LoginPage';
import HomePage from './Views/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <LoginRoute path="/login">
            <LoginPage />
          </LoginRoute>
          <PrivateRoute path="/home">
            <HomePage />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

