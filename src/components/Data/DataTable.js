import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import getData from '../../requests/test';
import getVisibleData from '../../selectors/getVisibleData'

const DataTable = () => {
    const { search } = useContext(DataContext);

    const data = getData();
    const visibleData = getVisibleData(data, search);

    console.log(data, visibleData)
    return (
        <div>
            {
                visibleData.map((row) => <p key={row.id}>{row.name}</p>)
            }
        </div>
    );
}

export default DataTable;
