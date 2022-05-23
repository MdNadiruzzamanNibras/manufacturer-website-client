import React, { createContext, useEffect, useState } from 'react';


import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    const [purchase, setPurchase]= useState([])
    const toolpur= createContext(setPurchase)
    useEffect(()=>{
        fetch('http://localhost:5000/tools')
        .then(res=>res.json())
        .then(data=> setTools(data))
    },[])
    const newTools =[...tools].reverse()
   
    return (
        <div>
            <h1 className='text-4xl text-red-400 text-center'>Tools Collection</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
             newTools.slice(0, 6).map(tool=> <Tool 
             key={tool._id}
             tool={tool}
             
             ></Tool>)
            }
            </div>
            
        </div>
    );
};

export default Tools;