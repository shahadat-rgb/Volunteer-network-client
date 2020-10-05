import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
 import "./AllPicture.css"
const AllPicture = (props) => {
    const [loggedInUser,setLoggedInUser] =useContext (UserContext)
   const history =useHistory()
   const {pic,name} =props.allPicture;


   const eventHandler=()=>{
       setLoggedInUser({...loggedInUser, evet: props.event})
       history.push('/registerForm')
   }
    return (
        <div>
             
                 <div>
                    <div onClick={eventHandler}>
                    <img className="allVolunteerPic" src={ require(`../../images/${pic}`)}alt=""/> 
                    </div>
                     <h3  style={{textAlign:'center'}}>{name}</h3>
                     
                 </div>
             </div>
        
    );
};

export default AllPicture;