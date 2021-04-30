import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import Dashboard from './components/dashboard/Dashboard';
import AddServices from './components/dashboard/AddServices/AddServices';
import Booking from './components/dashboard/bookings/Booking';
import ManageServices from './components/dashboard/ManageServices/ManageServices';
import Review from './components/dashboard/review/Review';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import LogIn from './components/login/LogIn';



export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/review">
              <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/addServices">
              <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
              <ManageServices></ManageServices>
          </PrivateRoute>
          <PrivateRoute path="/booking">
              <Booking></Booking>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
