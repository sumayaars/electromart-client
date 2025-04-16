
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import toast from 'react-hot-toast';
export default function Login() {
  // const [email,setEmail]=useState("");
  // const navigate = useNavigate();
  // const { handleGoogleSignIn,signInWithEmailPass,forgotPassword } = useContext(GlobalContext);
  const handleSubmit=(event)=>{
    event.preventDefault();
    const ourEvent=event.target
    const email=ourEvent.email.value;
    const password=ourEvent.password.value;
    signInWithEmailPass(email,password);

  //   const signInWithGoogle = () => {
  //     handleGoogleSignIn()
  //         .then((result) => {
  //             toast.success('Successfully Logged In!');
  //             navigate('/dashboard');
  //         })
  //         .catch((error) => {
  //             console.log(error);
  //         });
  // }

  // const handleforgotpassword=()=>{
  //   forgotPassword(email);
  // }

  }
  return (
   
        <div>
            <form className="mx-auto fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box mt-25" onSubmit={handleSubmit}>
                <legend className="fieldset-legend mx-auto font-bold text-2xl">Login</legend>
                
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" onChange={(e)=>setEmail(e.target.value)}/>

                <label className="fieldset-label">Password</label>
                <input type="password" className="input" placeholder="Password" name="password" />

               

                <input type='submit' className="btn btn-base-200  text-blue-900 hover:bg-blue-900 hover:text-white mt-4" value='Login'/>

                {/* <button  onClick={handleforgotpassword} className="text-blue-500 text-md font-semibold text-center">Forgot password?</button> */}

                <p className="text-center">OR</p>
                {/* <button
                type="button"
                className="btn bg-white text-black border-[#e5e5e5] mt-4"
                onClick={signInWithGoogle}
            >
                <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                    </g>
                </svg>
                Login with Google
            </button> */}

            <p className="text-md font-thin">
                Don't have an account? 
                <Link to="/signup" className="text-blue-950 font-bold ml-2">Sign up</Link>
            </p>
            </form>

          

          
        </div>
    
  )
}
