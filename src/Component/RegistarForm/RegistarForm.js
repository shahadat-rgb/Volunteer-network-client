import { useFormControl } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from '../../App';

const RegistarForm = () => {
    const [loggedInUser,setLoggedInUser] =useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useFormControl();

  const onSubmit= data =>{
      console.log(data);
  }
     
      console.log(watch("example")); // watch input value by passing the name of it
    return (
      <div className="container">
           <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

<input name="name" defaultValue={loggedInUser} ref={register({ required: true })} placeholder="write your name"/>
{errors.name && <span className="error">Name is required</span>}

<input name="email"  defaultValue={loggedInUser.email}  ref={register({ required: true })} placeholder="write your email" />
{errors.email && <span className="error">Email is required</span>}

<input name="address" ref={register({ required: true })} placeholder="write your adderss" />
{errors.address && <span className="error">Address is required</span>}

<input name="phone" ref={register({ required: true })} placeholder="write your phone number"/>
{errors.phone && <span className="error">Phone is required</span>}

<input name="password" ref={register({ required: true })} placeholder="write your password"/>
{errors.password && <span className="error">Password is required</span>}

<input name="country" ref={register({ required: true })} placeholder="write your country name"/>
{errors.country&& <span className="error">Country is required</span>}

<input name="zipCode" ref={register({ required: true })} placeholder="write your zip code"/>
{errors.zipCode && <span className="error">Zip code is required</span>}
  <input className="submit" type="submit" />
</form>
       </div> 
        
    );
};

export default RegistarForm;