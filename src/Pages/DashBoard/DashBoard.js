import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] =useAdmin(user)
   
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2  className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                     <li><Link to="/dashboard">My Profile</Link></li>
                    {user && !admin &&<>
                        <li><Link to="/dashboard/order">My order</Link></li>
                      <li><Link to="/dashboard/addReview">Add a review</Link></li>
                    </>
                    }
                   { admin && <>
                    <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                    <li><Link to="/dashboard/allOrders">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/addProducts">Add A Products</Link></li>
                   </>}
                   
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;