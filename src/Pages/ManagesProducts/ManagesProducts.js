import React from 'react';
import { toast } from 'react-toastify';
import useTools from '../../Hooks/useTools';

const ManagesProducts = () => {
    const [tools, setTools]= useTools()
    const deletetool =id=>{
        const processed = window.confirm('Are you sure delete the tool')
        if(processed){
            const url= `https://manufacturer-website-t9g0.onrender.com/tools/${id}`
            fetch(url,{
                method:'DELETE',
               
            })
            .then(res=> res.json())
            .then(data=>{
              toast(data);
             const remaining = tools.filter(tool => tool._id !== id);
             setTools(remaining);
            })
        }
 
     }
    return (
        
            <div className='max-w-7xl mx-auto'>
                <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                tools && tools.map(tool=>  <div className="card w-96 bg-base-100 my-6 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={tool.image} alt="tool" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{tool.name}</h2>
                  <p  className='text-lg'>Minimum Order:{tool.orderQuantity} </p>
                  <p  className='text-lg'>Available:{tool.availableQuantity}</p>
                  <p  className='text-lg'>Price: ${tool.price}</p>
                  <p  className='text-xs'>{tool.shortDescription}</p>
                  <button onClick={()=>deletetool(tool._id)} className="btn w-64 rounded-full">Delete</button>

                </div>
              </div>
               
             
           )
            }
                </div>
            </div>
      
            
    );
};

export default ManagesProducts;