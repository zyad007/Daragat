import React, { useState } from 'react';
import Header from './Home/Header';
import Selection from './Home/Selection'
import ContactUs from './Home/ContactUs'
import { Button } from '@mui/material';
import LogInModal from './LogInModal';

const Home = () => {
    const [isOpen, setIsOpen ] = useState(false);
    return (
        <div className="home">
            <Header/>
            <Selection/>
            <ContactUs/>
            <Button onClick={() => setIsOpen(true)} variant='basic'>Admin Panel</Button>
            <LogInModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default Home;
