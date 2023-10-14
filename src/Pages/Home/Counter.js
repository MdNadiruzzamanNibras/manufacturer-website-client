import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 gap-4 mt-5 items-center'>
                <div className='flex justify-end '>
                    <div className='text-4xl font-extrabold w-64 h-12  bg-white rounded-lg text-center px-4'>
                    <CountUp start={100000}
  end={82349843}
  duration={4.3} />

                </div>
                </div>
                <div className='mt-12 ml-4'>
                    <h1 className='text-4xl  font-bold '><span>Customers have placed their trust</span><br />
                    <span> in us</span></h1> 
                    
<h5 className='text-2xl'>and we have just begun!</h5>
*Disclaimer

                </div>
            </div>
        </div>
    );
};

export default Counter;