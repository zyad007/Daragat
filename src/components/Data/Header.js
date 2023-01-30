import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import FilterForm from './FilterForm';

const Header = (props) => {
    const navigate = useNavigate();
    return (
        <div className='data-header'>
            <Button className="back-button" variant="contained" onClick={() => {
                navigate("/")
            }}><FontAwesomeIcon icon = {faArrowLeft} /></Button>
            <FilterForm/>
            <h2 className='data-title'>{props.department} Department - Year {props.year} - First Semester's Grades</h2>
        </div>
    );
}

export default Header;
