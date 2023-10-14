import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Coundount from './Coundount';
import NewProduct from './NewProduct';
import Overtaking from './Overtaking';
import ReviewBuyer from './ReviewBuyer';

import Tools from './Tools';
import Counter from './Counter';
import WhyChoose from './WhyChoose';
import Support from './Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='lg:max-w-7xl lg:mx-auto'>
                <Counter></Counter>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <ReviewBuyer></ReviewBuyer>
            <Overtaking></Overtaking>
                <NewProduct></NewProduct>
                <WhyChoose></WhyChoose>
                <Coundount></Coundount>
                
            </div>
            
            <hr className='w-full h-2 text-slate-600 my-9' />
            <div className='lg:max-w-7xl lg:mx-auto'>
                <Support></Support>
            </div>
        </div>
    );
};

export default Home;