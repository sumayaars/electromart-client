import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import '../CssFile/signup.css'
import toast from 'react-hot-toast';
import { TbCameraPlus } from "react-icons/tb";

export default function Signup() {
// const{emailPassReg}=useContext(GlobalContext);
// const navigate=useNavigate();
const handleSubmit =(event)=>{
    event.preventDefault();
  //  const ourEvent=event.target
  //  const name=ourEvent.name.value;
  //  const email=ourEvent.email.value;
  //  const number=ourEvent.number.value;
  //  const password=ourEvent.password.value;
  //  const avatar=ourEvent.avatar.value;
  // emailPassReg(email,password,name,avatar,number);
  //  navigate('/login')
}
  return (
    <div>
    
      <form className="fieldset w-xs  bg-base-200 border border-base-300 p-4 rounded-box mx-auto  mt-12" onSubmit={handleSubmit}>
  <legend className="fieldset-legend mx-auto font-bold text-2xl text-blue-900 ">Signup</legend>

      <div className=" upload-btn-wrapper mt-2  relative overflow-hidden flex items-center justify-center ">
         <div className="rounded-full input  p-5 size-16   text-center text-3xl border-2 border-blue-900 text-blue-900">
         <TbCameraPlus />
         </div>
        <input type="file" name='myfile' />
      </div>
  
  <label className="fieldset-label text-blue-900">User name</label>
  <input type="text" className="input" placeholder="name" name='name' />

  <label className="fieldset-label text-blue-900">Email</label>
  <input type="email" className="input" placeholder="Email" name='email' />

  <label className="fieldset-label text-blue-900">Phone number</label>
  <input type="text" className="input" placeholder="Phone Number" name='number' />
  
  <label className="fieldset-label text-blue-900">Password</label>
  <input type="password" className="input" placeholder="Password" name='password' />
  <label className="fieldset-label text-blue-900">Confirm Password</label>
  <input type="password" className="input" placeholder="Password" name='password' />

  {/* <label className="fieldset-label">Avatar</label>
<input type="file" className="input" placeholder="Avatar" name="avatar" /> */}


  <input type='submit' className="btn btn-base-200  text-blue-900 hover:bg-blue-900 hover:text-white mt-4" value='Signup'/>
  <p className='text-md font-thin'>Already have an account? <Link to='/login' className='text-blue-950 font-bold ml-2'>Login</Link> </p>
 
</form>

   </div>
  )
}
