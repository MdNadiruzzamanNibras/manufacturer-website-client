import React from 'react';
import world from '../../images/business/world.png';
import customer from '../../images/business/customer.jpg';
import revenue from '../../images/business/revenue.png';
import parts from '../../images/business/motorcycleparts.jpg';

const BusinessSummary = () => {
    return (
        <div className='p-4 md:p-8 lg:p-12'>
            <h1 className='text-4xl text-center my-4 font-bold'>Our Service</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center'>
                    <img className='h-44 mx-auto' src={world} alt="World" />
                    <h5 className='text-2xl mt-4 font-bold'>80</h5>
                    <p className='text-xl'>Countries</p>
                </div>
                <div className='text-center'>
                    <img className='h-44 mx-auto' src={customer} alt="Customer" />
                    <h5 className='text-2xl mt-4 font-bold'>1.2B+</h5>
                    <p className='text-xl'>Customers</p>
                </div>
                <div className='text-center'>
                    <img className='h-44 mx-auto' src={revenue} alt="Revenue" />
                    <h5 className='text-2xl mt-4 font-bold'>2.2T+</h5>
                    <p className='text-xl'>Revenue</p>
                </div>
                <div className='text-center'>
                    <img className='h-44 mx-auto' src={parts} alt="Parts" />
                    <h5 className='text-2xl mt-4 font-bold'>30+</h5>
                    <p className='text-xl'>Parts</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;
