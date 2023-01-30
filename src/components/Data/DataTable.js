import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import getData from '../../requests/test';
import getVisibleData from '../../selectors/getVisibleData'
import DenseTable from './DenseTable';

const DataTable = () => {
    const { search } = useContext(DataContext);

    

    const data = getData();
    const visibleData = getVisibleData(data, search);
    
    return (
        <DenseTable rows={visibleData}/>
    );
}

export default DataTable;


// <div>
//             {
//                 visibleData.map((row) => <p key={row.id}>{row.name}</p>)
//             }
//         </div>