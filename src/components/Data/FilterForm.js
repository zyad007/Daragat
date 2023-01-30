import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';

const FilterForm = () => {
    const { search, setSearch } = useContext(DataContext);
    return (
        <div className='filter'>
            Search <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
    );
}

export default FilterForm;
