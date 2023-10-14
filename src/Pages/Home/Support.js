import React from 'react';
import { BiMap } from 'react-icons/bi';
import { BsArrowLeftRight } from 'react-icons/bs';
import {  GiAutoRepair} from 'react-icons/gi';
import {  AiFillLock} from 'react-icons/ai';

const Support = () => {
    return (
        <div className='grid lg:grid-cols-4 gap-3 mb-9'>
            <div className='flex '>
                <div><p className='m-2 pr-2'><BiMap /></p></div>
                 <div><h4 className='text-xl font-semibold'>Free shipping in Bangladesh
                </h4>
                <p>On all orders above ৳ 2000

</p></div>
            </div>
            <div className='flex '>
                <div><p className='m-2 pr-2'><BsArrowLeftRight />  </p></div>
                 <div><h4 className='text-xl font-semibold'>Easy 7 days returns

                </h4>
                <p>7 days money back guarantee



</p></div>
            </div>
            <div className='flex '>
                <div><p className='m-2 pr-2'><GiAutoRepair /></p></div>
                 <div><h4 className='text-xl font-semibold'>Genuine Warranty
                </h4>
                <p>Warranty Service will be available</p></div>
            </div>
            <div className='flex '>
                <div><p className='m-2 pr-2'><AiFillLock /></p></div>
                 <div><h4 className='text-xl font-semibold'>100% Secure Checkout
                </h4>
                <p>Bkash / Rocket / Nagad
</p></div>
            </div>
            
        </div>
    );
};

export default Support;