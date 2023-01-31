import React, {  useState } from 'react';
import { useLocation } from 'react-router';
import DataContext from '../context/DataContext';
import DataTable from './Data/DataTable';
import Header from './Data/Header';

function useQuery () {
    const {search} = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}
function getNumericYear(year) {
    switch(year) {
        case "One":
            return 0;
        case "Two":
            return 1;
        case "Three":
            return 2;
        case "Four":
            return 3;
        default:
            return 555;
    }
}
function getNumericDep(dep) {
    switch(dep) {
        case "Communication":
            return 0;
        case "Computer":
            return 1;
        case "Power":
            return 2;
        case "Bio Medical":
            return 3;
        case "Mechanical":
            return 4;
        default:
            return 555;
    }
}
const Data = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState({ prop:'SUB1', order:true });
    const [error, setError ] = useState("")
    
    const query = useQuery();
    const department = query.get("dep");
    const numericDepartment = getNumericDep(department);
    const year = query.get("year");
    const numericYear = getNumericYear(year);
    const exist = year && department;
    const authenticYear = ["One", "Two", "Three", "Four"].includes(year);
    const authenticDep = ["Communication", "Computer", "Power", "Bio Medical", "Mechanical"].includes(department);
    const valid = exist && authenticDep && authenticYear;
    return (
        <div className='data-comp'>
            {valid? (
                <DataContext.Provider value={ {search, setSearch, sort, setSort, error, setError} }>
                    <Header department={department} year={year}/>
                    <DataTable dep={numericDepartment} year={numericYear}/>
                </DataContext.Provider>
            ): <h2>Not Found Ya 3r.. :(</h2>}
            
        </div>
    );
}

export default Data;
