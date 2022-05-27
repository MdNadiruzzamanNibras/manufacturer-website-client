import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Coundount from './Coundount';
import Overtaking from './Overtaking';
import ReviewBuyer from './ReviewBuyer';

import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <ReviewBuyer></ReviewBuyer>
            <Overtaking></Overtaking>
            <Coundount></Coundount>

        </div>
    );
};

export default Home;