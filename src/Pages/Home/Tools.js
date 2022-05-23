import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/tools')
        .then(res=>res.json())
        .then(data=> setTools(data))
    },[])
    const newTools =[...tools].reverse()
    console.log(newTools);
    return (
        <div>
            <h1>{tools?.length}</h1>
            {
             newTools.slice(0, 6).map(tool=> <Tool 
             key={tool._id}
             tool={tool}
             ></Tool>)
            }
        </div>
    );
};

export default Tools;