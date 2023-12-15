import React from 'react';
import { useQuery } from 'react-query';
import User from './User';
import Loading from '../Shared/Loading';


const MakeAdmin = () => {
    const {data:users, isLoading,refetch}= useQuery('users',()=>fetch('https://manufacturer-website-t9g0.onrender.com/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading/>
    }
    return (
            <div  className='container mx-auto'>
                 <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr> 
                            <th>Index</th>
                            <th>Email</th>
                            <th>Make Admin</th>

                        </tr>
                    </thead>
                    <tbody >
                       {
                           users.map((user,index)=><User
                           key={user._id}
                           user={user}
                           index={index}
                           refetch={refetch}
                           ></User>)
                       }
                    </tbody>
                </table>
                </div>
            </div>
       
    );
};

export default MakeAdmin;