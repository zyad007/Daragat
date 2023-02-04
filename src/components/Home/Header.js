import React from 'react';

const Header = () => {
    return (
        <div className='home-header'>
            <h1 className='home-title'>FEHU Grades</h1>
            <img className="title-image" src={process.env.PUBLIC_URL + '/img/image.png'} alt='anas'/>
        </div>
    );
}

export default Header;
