import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import Header from './Data/Header';

function useQuery () {
    const {search} = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Data = (props) => {
    const query = useQuery();
    const navigate = useNavigate();
    const department = query.get("department");
    const year = query.get("year");
    const exist = year && department; // to be changed to a function
    return (
        <div>
            {exist? (
                <Header department={department} year={year}/>
            ): <h2>Not Found :(</h2>}
            
        </div>
    );
}

export default Data;
