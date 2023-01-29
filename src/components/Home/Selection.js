import React, { useState } from 'react';
import SelectionContext from '../../context/SelectionContext'
import Modal from './Modal';

const Selection = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [department, setDepartment] = useState('test');

    return (
        <SelectionContext.Provider value={ {isOpen, setIsOpen} }>
            <Modal department={department} />
        </SelectionContext.Provider>
    );
}

export default Selection;