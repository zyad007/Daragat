import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../../context/DataContext';
import getVisibleData from '../../selectors/getVisibleData'
import DenseTable from './DenseTable';

const DataTable = (props) => {
    const { search, sort } = useContext(DataContext);
    const [ data, setData ] = useState([]);
    const [ visibleData, setVisibleData ] = useState([]);

    useEffect(() => {
        fetch(`https://silly-cannon.74-50-88-98.plesk.page?dep=${props.dep}&year=${props.year}`)
            .then(res => {
                return res.json()
            })
            .then(
                (result) => {
                    setData(result);
                    setVisibleData(result);
                }
            ).catch((error) => {
                console.log(error);
            })
    }, [])
    useEffect(() => {
        setVisibleData(getVisibleData(data, search, sort))
    }, [search, sort]) 

    return (
        <div className='table'>
            <DenseTable rows={visibleData} />
        </div>
    );
}

export default DataTable;