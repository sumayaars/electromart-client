import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'

import toast from 'react-hot-toast';

export default function Signup() {
// const{emailPassReg}=useContext(GlobalContext);
// const navigate=useNavigate();
const handleSubmit =(event)=>{
    event.preventDefault();
   const ourEvent=event.target
   const name=ourEvent.name.value;
   const email=ourEvent.email.value;
   const number=ourEvent.number.value;
   const password=ourEvent.password.value;
   const avatar=ourEvent.avatar.value;
  emailPassReg(email,password,name,avatar,number);
 navigate('/dashboard')
}
  return (
    <div>
    
      <form className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box mx-auto  mt-25" onSubmit={handleSubmit}>
  <legend className="fieldset-legend mx-auto font-bold text-2xl ">Signup</legend>
  
  <label className="fieldset-label">User name</label>
  <input type="text" className="input" placeholder="name" name='name' />

  <label className="fieldset-label">Email</label>
  <input type="email" className="input" placeholder="Email" name='email' />

  <label className="fieldset-label">Phone number</label>
  <input type="number" className="input" placeholder="Phone Number" name='number' />
  
  <label className="fieldset-label">Password</label>
  <input type="password" className="input" placeholder="Password" name='password' />
  <label className="fieldset-label">Confirm Password</label>
  <input type="password" className="input" placeholder="Password" name='password' />

  <label className="fieldset-label">Avatar</label>
<input type="file" className="input" placeholder="Avatar" name="avatar" />


  <input type='submit' className="btn btn-base-200  text-blue-900 hover:bg-blue-900 hover:text-white mt-4" value='Signup'/>
  <p className='text-md font-thin'>Already have an account? <Link to='/login' className='text-blue-950 font-bold ml-2'>Login</Link> </p>
 
</form>

   </div>
  )
}
