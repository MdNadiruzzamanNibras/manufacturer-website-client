import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Update = () => {
    const [user] =useAuthState(auth)
    const navigate =useNavigate()
   
    const handleupdate = event =>{
        event.preventDefault();

        const name = user?.displayName
        const email = user?.email 
        const phone = event?.target?.phone?.value 
        const address = event?.target?.address?.value 
        const linkedin = event?.target?.linkedin?.value 

        const updateUser={name,email, phone, address, linkedin}
        console.log(name,email, phone, address);
        fetch(`https://manufacturer-website-server-mdnadiruzzamannibras.vercel.app/profile/${user?.email}`,
        {
            method:'PUT',
            headers:{
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              },
              body:JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>{
        if(data){
            toast('Update your profile')
        }})
         navigate('/dashboard')
    }
   
    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <div className="card-body" onSubmit={handleupdate}>
            <form>
            <input type="text"  value={user?.displayName}  className="input input-bordered  max-w-xs" /> <br />
            <input type="text"  value={user?.email}  className="input input-bordered  max-w-xs" /> <br />
            <input type="number"  name="phone" placeholder="Your phone Number"  className="input input-bordered  max-w-xs" /> <br />
            <input type="text"  name="address" placeholder="Address"  className="input input-bordered  max-w-xs" /> <br />
            <input type="text"  name="linkedin" placeholder="Profession"  className="input input-bordered  max-w-xs" /> <br />
            
            <input className='btn w-full max-w-xs text-white' type="submit" value="Update" />
            </form>
        </div>
        </div>
    );
};

export default Update;