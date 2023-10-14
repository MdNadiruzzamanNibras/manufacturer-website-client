import React from 'react';
import phone from '../../images/socailIcon/phone.png'
import mail from '../../images/socailIcon/mail.png'
const ReachUS = () => {
    return (
        <div className=' h-52 w-full flex justify-between pt-12  '>
            <div className='ml-4 '>
                <h1 className='text-4xl'>Reach us
                </h1>
                <div >
                    
                        <p className='flex items-center text-xl mt-5'><img className='w-5 ml-2 h-5' src={phone} alt="" /><span className='ml-5'>Call: +91 7219821111</span></p>
                    
                    <p className='flex items-center text-xl '><img className='m-0'  src={mail} alt="" /><span className='ml-4'>Write:customerservice@bajajauto.co.in</span></p>
                </div>
            </div>
            <div>
                <h1 className='text-4xl'>Follow us </h1>
                <div></div>
            </div>
        </div>
    );
};

export default ReachUS;