import React from 'react'
import { Link, NavLink } from "react-router"
export default function Navbar() {
    const menuItems= <>
    <li><NavLink to='/' className=" bg-base-100 font-bold  text-lg border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">Home</NavLink></li>
    <li><NavLink to='/products' className=" bg-base-100 font-bold  text-lg border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">Product</NavLink></li>
    <li><NavLink to='/contact' className=" bg-base-100 font-bold  text-lg border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">Contact</NavLink></li>
    <li><NavLink to='/about' className=" bg-base-100 font-bold  text-lg border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">About</NavLink></li>
    <li> 
    <NavLink to='/login' className=" bg-base-100 font-bold  text-lg border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">Login</NavLink>
    </li>
   
   </>
  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100 mx-auto container">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-lg text-blue-900 font-bold shadow">
        {menuItems}
      </ul>
    </div>
    <Link to='/'><img className='w-56' src='.\src\Components\media\logo.png' alt='logo'/></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg text-blue-900 font-bold">
    {menuItems}
    </ul>
  </div>
  {/* <div className="navbar-end">
    <NavLink to='/login' className="btn bg-base-100 font-bold border-2 text-lg border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">Login</NavLink>
  </div> */}
</div>
    </div>
  )
}
