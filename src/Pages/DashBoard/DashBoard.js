import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const DashBoard = () => {
    const [user] = useAuthState(auth);
   
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                     <li><Link to="/dashboard">My Profile</Link></li>
                    {user && <>
                        <li><Link to="/dashboard/order">My order</Link></li>
                      <li><Link to="/dashboard/addReview">Add a review</Link></li>
                    </>
                    }
                    
                   
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;