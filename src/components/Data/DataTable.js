import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../../context/DataContext';
import getVisibleData from '../../selectors/getVisibleData'
import DenseTable from './DenseTable';
import DenseTable5 from './DenseTable5';
import DenseTable6 from './DenseTable6';

const DataTable = (props) => {
    const { search, sort } = useContext(DataContext);
    const [ data, setData ] = useState([]);
    const [ visibleData, setVisibleData ] = useState([]);
    const prod = "https://pensive-haslett.74-50-88-98.plesk.page/?type=root&dep=";
    const dev = "http://localhost:5555?type=root&dep=";
    let [headers, setHeaders] = useState({subject1:'',subject2:'',subject3:'',subject4:'',subject5:'',subject6:''});
    useEffect(() => {
        fetch(prod.concat(`${props.dep}&year=${props.year}`))
            .then(res => {
                return res.json()
            })
            .then(
                (result) => {
                    setHeaders(result.shift())
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
            {
    
                (!headers.subject5? (<DenseTable rows={visibleData} headers={headers}  />) : (
                    !headers.subject6? <DenseTable5 rows={visibleData} headers={headers}  /> : (
                                                    <DenseTable6 rows={visibleData} headers={headers}  />
                    )
                ))

            }
            
        </div>
    );
}

export default DataTable;