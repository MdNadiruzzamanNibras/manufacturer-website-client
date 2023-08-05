import React from 'react';
import world from '../../images/business/world.png'
import customer from '../../images/business/customer.jpg'
import revenue from '../../images/business/revenue.png'
import parts from '../../images/business/motorcycleparts.jpg'
const BusinessSummary = () => {
    return (
        <div> 
            <h1 className='text-4xl text-center my-4 font-bold'>Our Service</h1>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='w-50 '>
                <img className=' h-44 '  src={world} alt="" />
                <h5 className='text-2xl lg:ml-16 '>80</h5>
                <p className='text-2xl lg:ml-7 '>Countries</p>
            </div>
            <div className='w-50'>
             <img  className=' h-44' src={customer} alt="" />
             <h5 className='text-2xl text-center'>1.2B+</h5>
             <p className='text-2xl text-center '>Customer</p>
            </div>
            <div className='w-50 '>
                <img className=' h-44' src={revenue} alt="" />
                <h5 className='text-2xl ml-10'>2.2T+</h5>
                <p className='text-2xl ml-8'>Revenue</p>
            </div>
            <div className='w-50'>
            <img className=' h-44' src={parts} alt="" />
                <h5 className='text-2xl ml-14'>30+</h5>
                <p className='text-2xl ml-12'>Parts</p>
            </div>
            </div>
        </div>
    );
};

export default BusinessSummary;