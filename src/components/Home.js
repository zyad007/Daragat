import React, { useState } from 'react';
import Header from './Home/Header';
import Selection from './Home/Selection'
import { Button } from '@mui/material';
import LogInModal from './LogInModal';
import FeedBackModal from './FeedBackModal';

const Home = () => {
    const [isLoginOpen, setIsLoginOpen ] = useState(false);
    const [isFeedOpen, setIsFeedOpen ] = useState(false);
    return (
        <div className="home">
            <Header/>
            <Selection/>
            <Button style={{position:'relative' ,left:'20px',  top:'20px'}} onClick={() => setIsLoginOpen(true)} variant='basic'>Admin Panel</Button>
            <Button style={{position:'relative' ,left:'20px',  top:'20px'}} onClick={() => setIsFeedOpen(true)} variant='basic'>Feedback</Button>
            <LogInModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
            <FeedBackModal isOpen={isFeedOpen} setIsOpen={setIsFeedOpen}/>
        </div>
    );
}

export default Home;
