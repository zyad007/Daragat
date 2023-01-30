import React, { useState } from 'react';
import SelectionContext from '../../context/SelectionContext'
import Modal from './Modal';

const Selection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [department, setDepartment] = useState('');

    const handleSelect = (e) => {
        setDepartment(e.target.innerText);
        setIsOpen(true);
    }

    return (
        <SelectionContext.Provider value={ {isOpen, setIsOpen} }>
            <Modal department={department} />
            <button onClick={handleSelect}>Comp</button>
            <button onClick={handleSelect}>Mech</button>
            <button onClick={handleSelect}>Comm</button>
            <button onClick={handleSelect}>Elec</button>
        </SelectionContext.Provider>
    );
}

export default Selection;