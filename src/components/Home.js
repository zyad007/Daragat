import React from 'react';
import Header from './Home/Header';
import Selection from './Home/Selection'
import ContactUs from './Home/ContactUs'

const Home = () => {
    
    return (
        <div className="home">
            <Header/>
            <Selection/>
            <ContactUs/>
        </div>
    );
}

export default Home;
