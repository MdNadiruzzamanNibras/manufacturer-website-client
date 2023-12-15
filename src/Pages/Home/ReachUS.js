import React from 'react';
import phone from '../../images/socailIcon/phone.png'
import mail from '../../images/socailIcon/mail.png'
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { ImLinkedin2 } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMailOpenSharp } from 'react-icons/io5';

const ReachUS = () => {
    return (
        <div className=' h-52 w-full lg:flex lg:justify-between py-12 mb-14 container'>
            <div className='ml-4 '>
                <h1 className='text-4xl'>Reach us
                </h1>
                <div >
                    
                        <p className='flex items-center text-xl mt-5'><span className='ml-4 text-2xl w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center'><BsFillTelephoneFill/></span><span className='ml-5'>+8801783014828</span></p>
                    
                    <p className='flex items-center text-xl mt-2'><span className='ml-4 text-2xl w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center'><IoMailOpenSharp/></span><span className='ml-4'>nadiruzzamannibras@gmail.com</span></p>
                </div>
            </div>
            <div>
                <h1 className='text-4xl'>Follow us </h1>
                <div className='flex items-center mt-10'>
                    <a className='ml-4 text-2xl w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center' href=""><FaFacebookF/></a>
                    <a className='ml-4 text-2xl w-10 h-10 bg-blue-600 flex items-center justify-center text-white rounded-full ' href=""><FiInstagram/></a>
                    <a className='ml-4 text-2xl w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center' href=""><ImLinkedin2/></a>
                </div>
                
            </div>
        </div>
    );
};

export default ReachUS;