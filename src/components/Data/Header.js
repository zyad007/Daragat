import React from 'react';
import { useNavigate } from 'react-router';

const Header = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>{props.department} year: {props.year} First Semester's Grades</h2>
            <button onClick={() => {
                navigate("/")
            }}>Back</button>
        </div>
    );
}

export default Header;
