import React from 'react';
import { Link } from 'react-router-dom';
 import "./AllPicture.css"
const AllPicture = ({allPicture}) => {
    return (
        <div>
             
                 <div>
                   <Link to='/registerForm' > <img className="allVolunteerPic" src={ require(`../../images/${allPicture.pic}`)}alt=""/> </Link>
                     <h3  style={{textAlign:'center'}}>{allPicture.name}</h3>
                     
                 </div>
             </div>
        
    );
};

export default AllPicture;