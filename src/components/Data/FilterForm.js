import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';

const FilterForm = () => {
    const { setSearch } = useContext(DataContext);
    return (
        <div className='filter'>
            <TextField className='search' id="standard-basic" label="Search" fullWidth onChange={(e) => {
                setSearch(e.target.value)
            }}/>
        </div>
    );
}

export default FilterForm;
