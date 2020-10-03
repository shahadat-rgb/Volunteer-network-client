import React from 'react';
import './Home.css'
import volunteer from "../../voluanteer-bg.jpg"
import AllPicture from '../AllPicture/AllPicture';
import { Grid } from '@material-ui/core';
import FakeData from '../../fakeData/fakeData';
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