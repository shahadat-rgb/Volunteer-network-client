import React from 'react';
import './Home.css'
import AllPicture from '../AllPicture/AllPicture';
import { Grid } from '@material-ui/core';
import volunteer from "../../voluanteer-bg.jpg"

const  FakeData=[
    {
        name:'animal shelter',
        pic: 'animalShelter.png'
    },
    {
        name:'Baby sit',
        pic:'babySit.png'

    },
    {
       name:'Bird house',
       pic: 'birdHouse.png'
   },
   {
       name:'Clean water',
       pic:'cleanWater.png'

   },
   {
       name:'Child support',
       pic: 'childSupport.png'
   },
   {
       name:'clearn Park',
       pic:'clearnPark.png'

   },
   {
       name:'cloth swap',
       pic: 'clothSwap.png'
   },
   {
       name:'drive safety',
       pic:'driveSafety.png'

   },
   {
       name:'extra volunteer',
       pic: 'extraVolunteer.png'
   },
   {
       name:'food charity',
       pic:'foodCharity.png'

   },
   {
       name:'good education',
       pic: 'goodEducation.png'
   },
   {
       name:'IT help',
       pic:'ITHelp.png'

   },
   {
      name:'libray book',
      pic: 'libraryBooks.png'
  },
  {
      name:'music lessons',
      pic:'musicLessons.png'

  },
  {
      name:'new Books',
      pic: 'newBooks.png'
  },
  {
      name:'refuse shelter',
      pic:'refuseShelter.png'

  },
  {
      name:'river clean',
      pic: 'riverClean.png'
  },
  {
      name:'school suffiles',
      pic:'schoolSuffiles.png'

  },
  {
      name:'study Group',
      pic: 'studyGroup.png'
  },
  {
      name:'stuffed animals',
      pic:'stuffedAnimals.png'

  },
];
const Home = () => {
    return (
     <>
          <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${volunteer})` }} className="home">
        <div className="container">
                <div className="container input-aria">
                    <h1>I grow by helping people in need</h1>
                    <div class="input-group">
                       <input type="text" class="form-control" placeholder="Search volunteer" aria-describedby="button-addon2"/>
                            <div class="input-group-append">
                              <button class="btn btn-primary input-btn" type="button" id="button-addon2">Search</button>
                         </div>
                    </div>
                </div>   
             </div>  
            </div>
                <div className="container">
                <Grid container spacing={2} >
                   {
                        FakeData.map(allPicture => <Grid item md={3}><AllPicture allPicture={allPicture}></AllPicture> </Grid>)
                   }
               </Grid>
                </div>
         
</>
        

    );
};

export default Home;