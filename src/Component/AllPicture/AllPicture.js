import React from 'react';
 import "./AllPicture.css"
const AllPicture = ({allPicture}) => {
    return (
        <div>
             
                 <div>
                     <img className="allVolunteerPic" src={ require(`../../images/${allPicture.pic}`)}alt=""/>
                     <h3  style={{textAlign:'center'}}>{allPicture.name}</h3>
                 </div>
             </div>
        
    );
};

export default AllPicture;