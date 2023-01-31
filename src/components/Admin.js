import React from 'react';
import { useMatch, useSearchParams } from 'react-router-dom';

const Admin = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            {searchParams.get('id') === '7332155'? (
                <div>admin</div>
            ): <h2>Not Found Ya 3r.. :(</h2>}
        </div>
    );
}

export default Admin;