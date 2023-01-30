import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import getData from '../../requests/test';
import getVisibleData from '../../selectors/getVisibleData'
import DenseTable from './DenseTable';

const DataTable = () => {
    const { search, sort } = useContext(DataContext);

    const data = getData();
    const visibleData = getVisibleData(data, search, sort);
    
    return (
        <div className='table'>
            <DenseTable rows={visibleData}/>
        </div>
    );
}

export default DataTable;


// <div>
//             {
//                 visibleData.map((row) => <p key={row.id}>{row.name}</p>)
//             }
//         </div>