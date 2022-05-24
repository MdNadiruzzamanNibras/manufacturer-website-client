import React from 'react';
import useTools from '../../Hooks/useTools';

const ManagesProducts = () => {
    const [tools, setTools]= useTools()
    const deletetool =id=>{
        console.log(id);
        
 
     }
    return (
        <div>
            <div >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                tools && tools.map(tool=>  <div class="card w-96 bg-base-100 my-6 shadow-xl">
                <figure class="px-10 pt-10">
                  <img src={tool.image} alt="tool" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">{tool.name}</h2>
                  <p className='text-lg'>Minimum Order:{tool.orderQuantity} </p>
                  <p className='text-lg'>Available:{tool.availableQuantity}</p>
                  <p className='text-lg'>Price: ${tool.price}</p>
                  <p className='text-xs'>{tool.shortDescription}</p>
                  <button onClick={()=>deletetool(tool._id)} class="btn w-64 rounded-full">Button</button>

                </div>
              </div>
               
             
           )
            }
                </div>
            </div>
        </div>
            
    );
};

export default ManagesProducts;