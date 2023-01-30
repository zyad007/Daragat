import React, { useState } from 'react';
import SelectionContext from '../../context/SelectionContext'
import BasicModal from './Modal';
import ButtonBases from './SelectImage'

const Selection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [department, setDepartment] = useState('');

    const handleSelect = (e) => {
        setDepartment(e.target.innerText);
        setIsOpen(true);
    }

    return (
        <SelectionContext.Provider value={ {isOpen, setIsOpen} }>
            <BasicModal department={department} />
            <ButtonBases handleSelect={handleSelect}/>
        </SelectionContext.Provider>
    );
}

export default Selection;