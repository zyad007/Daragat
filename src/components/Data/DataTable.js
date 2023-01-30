import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../../context/DataContext';
import getData from '../../requests/test';
import getVisibleData from '../../selectors/getVisibleData'
import DenseTable from './DenseTable';

const DataTable = (props) => {
    const { search, sort } = useContext(DataContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost?dep=${props.dep}&year=${props.year}`)
            .then(res => {
                return res.json()
            })
            .then(
                (result) => {
                    console.log(result)
                    setData(getVisibleData(result, search, sort));
                }
            ).catch((error) => {
                console.log(error);
                const data = getData();
                setData(getVisibleData(data, search, sort));
            })
    }, [])



    return (
        <div className='table'>
            <DenseTable rows={data} />
        </div>
    );
}

export default DataTable;