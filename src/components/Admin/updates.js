import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Updates = () => {
    const prod = "https://pensive-haslett.74-50-88-98.plesk.page?type=update&dep=";
    const dev = "http://localhost:5555?type=update&dep=";
    const [error, setError] = useState("")
    const [reports, setReports] = useState("");
    const [counters, setCounters] = useState([]);
    function updateRequest(dep, year) {
        fetch(prod.concat(`${dep}&year=${year}`))
            .then(res => {
                console.log("Updated!")
                return res.text()
            })
            .catch((error) => {
                setError(`Error Occured!\n${error}`)
                console.log(error);
            })
    }
    function updateAll() {
        for(let i=0;i<5;i++) {
            for(let j=0;j<4;j++) {
                updateRequest(i,j)
            }
        }
        fetch('https://pensive-haslett.74-50-88-98.plesk.page?type=stats')
            .then(res => res.json())
            .then(result => {
                setCounters(result.counters);
            })
            .catch((error) => {
                setError(`Error Occured!\n${error}`)
                console.log(error);
            })
    }
    useEffect(() => {
        fetch('https://pensive-haslett.74-50-88-98.plesk.page?type=reports')
            .then(res => res.text())
            .then(result => {
                setReports(result);
            })
            .catch((error) => {
                setError(`Error Occured!\n${error}`)
                console.log(error);
            })
        fetch('https://pensive-haslett.74-50-88-98.plesk.page?type=stats')
            .then(res => res.json())
            .then(result => {
                setCounters(result.counters);
            })
            .catch((error) => {
                setError(`Error Occured!\n${error}`)
                console.log(error);
            })
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className='updates'>
                <h1>Updates</h1>
                <Button onClick={() => updateAll()}>Refresh All</Button>
                <p>{error}</p>
                <h3>Communication</h3>
                <Button onClick={() => updateRequest(0, 0)}>One</Button>
                <Button onClick={() => updateRequest(0, 1)}>Two</Button>
                <Button onClick={() => updateRequest(0, 2)}>Three</Button>
                <Button onClick={() => updateRequest(0, 3)}>Four</Button>
                <h3>Computer</h3>
                <Button onClick={() => updateRequest(1, 0)}>One</Button>
                <Button onClick={() => updateRequest(1, 1)}>Two</Button>
                <Button onClick={() => updateRequest(1, 2)}>Three</Button>
                <Button onClick={() => updateRequest(1, 3)}>Four</Button>
                <h3>Power</h3>
                <Button onClick={() => updateRequest(2, 0)}>One</Button>
                <Button onClick={() => updateRequest(2, 1)}>Two</Button>
                <Button onClick={() => updateRequest(2, 2)}>Three</Button>
                <Button onClick={() => updateRequest(2, 3)}>Four</Button>
                <h3>Bio Medical</h3>
                <Button onClick={() => updateRequest(3, 0)}>One</Button>
                <Button onClick={() => updateRequest(3, 1)}>Two</Button>
                <Button onClick={() => updateRequest(3, 2)}>Three</Button>
                <Button onClick={() => updateRequest(3, 3)}>Four</Button>
                <h3>Mech</h3>
                <Button onClick={() => updateRequest(4, 0)}>One</Button>
                <Button onClick={() => updateRequest(4, 1)}>Two</Button>
                <Button onClick={() => updateRequest(4, 2)}>Three</Button>
                <Button onClick={() => updateRequest(4, 3)}>Four</Button>

            </div>
            <div style={{ minWidth: 300 }}>
                <h1>Counter</h1>
                <p>Total: {counters[0]}</p>
                <h3>Communication</h3>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p>One: {counters[1]}</p>
                    <p>Two: {counters[2]}</p>
                    <p>Three: {counters[3]}</p>
                    <p>Four: {counters[4]}</p>
                </div>
                <h3>Computer</h3>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                    <p>One: {counters[5]}</p>
                    <p>Two: {counters[6]}</p>
                    <p>Three: {counters[7]}</p>
                    <p>Four: {counters[8]}</p>
                </div>

                <h3>Power</h3>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p>One: {counters[9]}</p>
                    <p>Two: {counters[10]}</p>
                    <p>Three: {counters[11]}</p>
                    <p>Four: {counters[12]}</p>
                </div>
                <h3>Bio Medical</h3>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p>One: {counters[13]}</p>
                    <p>Two: {counters[14]}</p>
                    <p>Three: {counters[15]}</p>
                    <p>Four: {counters[16]}</p>
                </div>
                <h3>Mech</h3>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p>One: {counters[17]}</p>
                    <p>Two: {counters[18]}</p>
                    <p>Three: {counters[19]}</p>
                    <p>Four: {counters[20]}</p>
                </div>
            </div>
            <div >
                <h1>Feedback</h1>
                <textarea style={{ height: 600, width: 240 }} value={reports} disabled={true} />
            </div>
        </div>

    );
}

export default Updates;
