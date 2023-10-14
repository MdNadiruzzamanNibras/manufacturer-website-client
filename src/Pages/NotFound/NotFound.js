import React from 'react';
import error from '../../images/error/error.png'
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
    const navigate = useNavigate(); 

setTimeout(() => {
    navigate('/');
}, 5000);
    return (
        <div>
            <img className='w-screen h-screen' src={error} alt="" />
        </div>
    );
};

export default NotFound;