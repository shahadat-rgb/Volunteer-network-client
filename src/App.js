import React, { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import RegistarForm from './Component/RegistarForm/RegistarForm';
import NotMatch from './Component/NotMatch/NotMatch';

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

        <PrivateRoute path="/registerForm">
           <RegistarForm></RegistarForm>
         </PrivateRoute>

         <Route path='*'>
         <NotMatch></NotMatch>
       </Route>

       </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
