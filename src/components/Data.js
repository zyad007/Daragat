import React from 'react';
import { useParams } from 'react-router';
import Header from './Data/Header';

const Data = (props) => {
    let { department } = useParams();
    console.log(props)
    return (
        <div>
            <Header department={department}/>
        </div>
    );
}

export default Data;
