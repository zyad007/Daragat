import React from 'react';
import getData from '../../requests/test';

const DataTable = () => {
    const data = getData();
    const visibleData = getVisibleData(data, search);
    return (
        <div>
            
        </div>
    );
}

export default DataTable;
