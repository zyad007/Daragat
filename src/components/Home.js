import React, { useContext, useState } from 'react';
import Header from './Home/Header';
import Selection from './Home/Selection'
import ContactUs from './Home/ContactUs'

const Home = () => {
    
    return (
        <div>
            <Header/>
            <Selection/>
            <ContactUs/>
        </div>
    );
}

export default Home;
