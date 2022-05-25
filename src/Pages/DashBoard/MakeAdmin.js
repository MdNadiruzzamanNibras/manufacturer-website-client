import React from 'react';
import { useQuery } from 'react-query';
import User from './User';

const MakeAdmin = () => {
    const {data:users, isLoading,refetch}= useQuery('users',()=>fetch('http://localhost:5000/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <p>Loading</p>
    }
    return (
            <div >
                <table class="table ">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Make Admin</th>
                           
                        </tr>
                    </thead>
                    <tbody className='table w-full'>
                       {
                           users.map(user=><User
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></User>)
                       }
                    </tbody>
                </table>
            </div>
       
    );
};

export default MakeAdmin;