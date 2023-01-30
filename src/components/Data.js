import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import DataContext from '../context/DataContext';
import DataTable from './Data/DataTable';
import FilterForm from './Data/FilterForm';
import Header from './Data/Header';

function useQuery () {
    const {search} = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Data = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState({ prop:'SUB1', order:true });

    const query = useQuery();
    const department = query.get("dep");
    const year = query.get("year");
    const exist = year && department; // to be changed to a function
    return (
        <div>
            {exist? (
                <DataContext.Provider value={ {search, setSearch, sort, setSort} }>
                    <Header department={department} year={year}/>
                    <FilterForm />
                    <DataTable />
                </DataContext.Provider>
            ): <h2>Not Found :(</h2>}
            
        </div>
    );
}

export default Data;
