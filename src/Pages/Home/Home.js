import React from 'react';
import Banner from './Banner';
import Coundount from './Coundount';
import ReviewBuyer from './ReviewBuyer';

import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <ReviewBuyer></ReviewBuyer>
            <Coundount></Coundount>

        </div>
    );
};

export default Home;