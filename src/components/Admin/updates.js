import { Button } from '@mui/material';
import React, { useState } from 'react';

const Updates = () => {
    const prod = "https://silly-cannon.74-50-88-98.plesk.page/update?dep=";
    const dev = "http://localhost:5555/update?dep=";
    const [error, setError] = useState("")
    function updateRequest (dep,year)  {
        fetch(dev.concat(`${dep}&year=${year}`))
            .then(res => {
                console.log("Updated!")
                return res.json()
            })
            .catch((error) => {
                setError(`Error Occured!\n${error}`)
                console.log(error);
            })
    }
    return (
        <div className='updates'>
            <h1>Updates</h1>
            <p>{error}</p>
            <h3>Communication</h3>
            <Button onClick={updateRequest(0,0)}>One</Button>
            <Button onClick={updateRequest(0,1)}>Two</Button>
            <Button onClick={updateRequest(0,2)}>Three</Button>
            <Button onClick={updateRequest(0,3)}>Four</Button>
            <h3>Computer</h3>
            <Button onClick={updateRequest(1,0)}>One</Button>
            <Button onClick={updateRequest(1,1)}>Two</Button>
            <Button onClick={updateRequest(1,2)}>Three</Button>
            <Button onClick={updateRequest(1,3)}>Four</Button>
            <h3>Power</h3>
            <Button onClick={updateRequest(2,0)}>One</Button>
            <Button onClick={updateRequest(2,1)}>Two</Button>
            <Button onClick={updateRequest(2,2)}>Three</Button>
            <Button onClick={updateRequest(2,3)}>Four</Button>
            <h3>Bio Medical</h3>
            <Button onClick={updateRequest(3,0)}>One</Button>
            <Button onClick={updateRequest(3,1)}>Two</Button>
            <Button onClick={updateRequest(3,2)}>Three</Button>
            <Button onClick={updateRequest(3,3)}>Four</Button>
            <h3>Mech</h3>
            <Button onClick={updateRequest(4,0)}>One</Button>
            <Button onClick={updateRequest(4,1)}>Two</Button>
            <Button onClick={updateRequest(4,2)}>Three</Button>
            <Button onClick={updateRequest(4,3)}>Four</Button>
        </div>
    );
}

export default Updates;
