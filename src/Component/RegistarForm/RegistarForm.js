import React, { useContext } from 'react';
import { UserContext } from '../../App';
import {useForm} from 'react-hook-form'
import Header from '../Header/Header';
import "./Registar.css"
import { useHistory } from 'react-router-dom';
const RegistarForm = () => {
    const history=useHistory();
    const [loggedInUser,setLoggedInUser] =useContext(UserContext)
    const { register, handleSubmit, errors } = useForm();

  const onSubmit= data =>{
     const registerUser=({eventName:loggedInUser.event?.name,  name:loggedInUser.name, email:loggedInUser.email, img:loggedInUser.event?.pic, register:data})

    fetch('http://localhost:4000/submit-form',{
      method:'POST', 
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(registerUser)
  })
  .then(res=>res.text())
  .then(result=>{
      if(result ==='true'){
          history.push('/events')
      }
  })
     
  }
     
      // console.log(watch("example")); // watch input value by passing the name of it
    return (
      <div className="container">
          <Header></Header> <br/> <br/> <br/>
           <section class="row justify-content-center">
             <section className="col-12 col-sm-6 col-md-7 "> 
     
         <form className="registration-aria" onSubmit={handleSubmit(onSubmit)}>
       <h2 style={{textAlign:'center',marginBottom:'15px'}}>Registration From</h2>
<input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} className='input-value' placeholder="write your name"/> <br/> <br/><br/>
{errors.name && <span className="error">Name is required</span>}

<input name="email"  defaultValue={loggedInUser.email}  ref={register({ required: true })} className='input-value' placeholder="write your email" /> <br/> <br/><br/>
{errors.email && <span className="error">Email is required</span>}

<input name="discription"  ref={register({ required: true })} className='input-value' placeholder="write your discription" /> <br/> <br/><br/>
{errors.discription && <span className="error">discription is required</span>}

<input type="date" ref={register({ required: true })} className='input-value' name="date" id="date"/> <br/> <br/> <br/>
{errors.date && <span className="error">date is required</span>}

<input name="organic" defaultValue={loggedInUser.event?.name}   ref={register({ required: true })} className='input-value' placeholder="write your organic name"/> <br/> <br/><br/>
{errors.organic && <span className="error">organic is required</span>}
   

<button className="btn btn-primary Registration-btn"  type="submit">Registration</button>
</form>
         </section>
           </section>
       </div> 
        
    );
};

export default RegistarForm;