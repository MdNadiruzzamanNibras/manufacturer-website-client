import React from 'react';
import { GrDeliver } from 'react-icons/gr';
import { BiSupport } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const WhyChoose = () => {
    return (
        <div className='mt-9'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold mb-4'>Why Choose Us?</h2>
                <p className='text-lg'><span>We’ve been Selling Genuine Motorcycle Parts and Accessories for the last 3 years. We present The</span> <br />  <span>Best Shopping site to Buy Motorcycle Parts online in Bangladesh. If you choose our website for Buy</span> <br /> <span>Motorcycle Parts you not mistaken, and we always treat customers with respect.</span></p>
            </div>
            <div className='grid lg:grid-cols-3 mt-14'>
                <div className='text-center'>
                    <h1 className='text-4xl ml-44'><GrDeliver /></h1>
                   <h4 className='text-2xl'> Quick Delivery
                    </h4>           <p><span>All Bangladesh Free Shipping with Fast Delivery</span> <br /><span> in 24 hours.
 </span>

</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-4xl ml-44'><BiSupport /></h1>
                    <h4 className='text-2xl'> Outstanding support</h4>
                    <p className='text-lg'><span>First-class customer support available 24 hours 
</span> <br  /><span> a day by phone, chat.

 </span>

</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-4xl ml-44'><AiOutlineShoppingCart /></h1>
                   <h4 className='text-2xl'> Secure checkout
                    </h4>           <p className='w-72 mx-auto'>With 128-bit SSL security with advanced encryption you are guaranteed that your purchases are safe.
</p>
                </div>
                
            </div>
        </div>
    );
};

export default WhyChoose;