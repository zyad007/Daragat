import React from 'react';

const FilterForm = (props) => {
    return (
        <div>
            <input value={"anas"} onChange={(e) => {
                console.log(e.target.value)
            }}/>
        </div>
    );
}

export default FilterForm;
