import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
// import RegistarForm from './Component/RegistarForm/RegistarForm';

// export  const UserContext =createContext();
function App() {
  return (
     <Router>
       <Switch>
         <Route path="/">
             <Header></Header>
              <Home></Home>
         </Route>
         {/* <Route path="Registration">
            <RegistarForm></RegistarForm>
         </Route> */}
       </Switch>
     </Router>
  );
}

export default App;
