import React from 'react';
import Banner from './Banner';
import Coundount from './Coundount';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <Coundount></Coundount>

        </div>
    );
};

export default Home;