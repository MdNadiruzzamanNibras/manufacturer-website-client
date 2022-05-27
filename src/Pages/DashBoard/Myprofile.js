import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myprofile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1  className='text-2xl'>{user.displayName}</h1>
            <h3>{user.email}</h3>
        </div>
    );
};

export default Myprofile;