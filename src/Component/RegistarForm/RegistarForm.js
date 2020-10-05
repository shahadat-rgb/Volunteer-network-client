import React, { useContext } from 'react';
import { UserContext } from '../../App';
import {useForm} from 'react-hook-form'
import Header from '../Header/Header';
import "./Registar.css"
const RegistarForm = () => {
    const [loggedInUser,setLoggedInUser] =useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit= data =>{
      console.log(data);
  }
     
      console.log(watch("example")); // watch input value by passing the name of it
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

<input name="date" ref={register({ required: true })} className='input-value' placeholder="write your date" />  <br/> <br/> <br/>

{errors.date && <span className="error">Address is required</span>}

<input name="phone" ref={register({ required: true })} className='input-value' placeholder="write your phone number"/> <br/> <br/><br/>
{errors.phone && <span className="error">Phone is required</span>}

<input name="organic"  ref={register({ required: true })} className='input-value' placeholder="write your organic name"/> <br/> <br/><br/>
{errors.organic && <span className="error">Password is required</span>}
   

  <input  className="btn btn-primary Registration-btn" type="button" value="Registration-now"/>
</form>
         </section>
           </section>
       </div> 
        
    );
};

export default RegistarForm;