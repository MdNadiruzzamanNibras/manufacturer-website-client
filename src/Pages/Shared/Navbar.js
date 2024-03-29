import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const [admin] =useAdmin(user)
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
      };
      console.log();
   
    const NavbarLink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profolio">Protfolio</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      {admin && <li><Link to="/manageproducts">ManageProduct</Link></li>}
        
         {
            user && <li><Link to="/dashboard">DashBoard</Link></li>
        }
         <li>{user ? <button  onClick={logout}  className="btn btn-active btn-ghost">Sign Out</button>
:<Link to="/login">Login</Link>}</li>
    </>
    return (
        <div  className="navbar bg-base-100">
            <div  className="navbar-start">
                <div  className="dropdown">
                    <label tabIndex="0"  className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0"  className="menu menu-compact dropdown-content mt-3 py-2 shadow bg-base-100 rounded-box w-52">
                        {NavbarLink}
                    </ul>
                </div>
                <h2  className="btn btn-ghost normal-case text-xl">Redline Motorsports</h2>
            </div>
            <div  className=" hidden lg:flex">
                <ul  className="menu menu-horizontal p-0">
                    {NavbarLink}
                </ul>
            </div>
            <div  className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar"  className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
      
    );
};

export default Navbar;