import React from 'react';
import Search from '../Search/Search';
import FeaturedEvent from '../FeaturedEvent/FeaturedEvent';

const Home = () => {
    return (
        <div>
            <Search></Search>
            <FeaturedEvent></FeaturedEvent>
        </div>
    );
};

export default Home;