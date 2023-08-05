import React from 'react';
import Tool from './Tool';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';

const Tools = () => {
    
    const { data: tools, isLoading } = useQuery('tools', () => fetch('https://manufacturer-website-server-mdnadiruzzamannibras.vercel.app/tools').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
   
    const newTools =[...tools].reverse()

    return (
        <div>
            <h1  className='text-4xl text-red-400 text-center my-5'>Tools Collection</h1>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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