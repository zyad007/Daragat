import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';

const FilterForm = () => {
    const { search, setSearch } = useContext(DataContext);
    return (
        <div>
            <input value={search} onChange={(e) => {
                setSearch(e.target.value)
            }}/>
        </div>
    );
}

export default FilterForm;
