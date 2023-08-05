import React from 'react';

const Loading = () => {
    return (
        <div >
            <div className= "flex justify-center align-middle ">
            <img className='w-80 h-80 animate-spin' src='https://i.ibb.co/zHBdzT7/Loading-spinner-svg.png' alt="" /> 
            </div>  
            <h1 className='text-4xl text-center font-black'>Data is loading....</h1>
        </div>
    );
};

export default Loading;