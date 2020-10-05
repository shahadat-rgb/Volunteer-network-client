import React, { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import RegistarForm from './Component/RegistarForm/RegistarForm';

export const UserContext= createContext();
 function App() {   
   const [loggedInUser,setLoggedInUser] =useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home> 
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
        <Route path="/registerForm">
           <RegistarForm></RegistarForm>
         </Route>
       </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
