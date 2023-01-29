import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import FilterForm from './Data/FilterForm';
import Header from './Data/Header';

function useQuery () {
    const {search} = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Data = (props) => {
    const query = useQuery();
    const navigate = useNavigate();
    const department = query.get("dep");
    const year = query.get("year");
    const exist = year && department; // to be changed to a function
    return (
        <div>
            {exist? (
                <div>
                    <Header department={department} year={year}/>
                    <FilterForm />
                </div>
            ): <h2>Not Found :(</h2>}
            
        </div>
    );
}

export default Data;
