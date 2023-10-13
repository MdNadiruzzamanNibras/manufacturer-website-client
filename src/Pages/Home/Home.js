import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Coundount from './Coundount';
import NewProduct from './NewProduct';
import Overtaking from './Overtaking';
import ReviewBuyer from './ReviewBuyer';

import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='lg:max-w-7xl lg:mx-auto'>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <ReviewBuyer></ReviewBuyer>
            <Overtaking></Overtaking>
            <NewProduct></NewProduct>
            <Coundount></Coundount>
            </div>
            

        </div>
    );
};

export default Home;