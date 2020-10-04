import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logos from "../../logos/Group 1329.png"
import google from "../../google.png"
import "./Login.css"

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history  = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser)
            history.replace(from)
             console.log(signedInUser)

            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <body className="container google-auth">

          <div className="container logo-icon">
               <img  src={logos} alt=""/>
          </div>
          <div className="container google-login-aria">
                   <h1 style={{textAlign:'center',marginTop:'20px'}}>Login aria</h1>

              <div onClick={handleGoogleSignIn} className="google-loggedIn">
                  <img style={{height:'40px'}} src={google} alt=""/>
                  <h3 style={{marginLeft:'30px'}}> Continue with google </h3>
              </div>
              <span style={{textAlign:'center'}}>Dont have an account ?</span>  <span style={{color:'orange',paddingLeft:'5px',textAlign:'center'}}> <u>create an account</u> </span>
          </div>

        </body>
    );
};

export default Login;