import React, { useContext } from 'react';
import ReactModal from 'react-modal';
import SelectionContext from '../../context/SelectionContext';
import { useNavigate } from 'react-router-dom';

const Modal = ({department}) => {
    const { isOpen, setIsOpen } = useContext(SelectionContext);

    const nav = useNavigate(); 

    return (
        <ReactModal 
            isOpen={isOpen}
            >
            <button onClick={() => setIsOpen(false) }>x</button>
            <button onClick={() => nav( `/data?dep=${department}&year=one` )}>1</button>
            <button onClick={() => nav( `/data?dep=${department}&year=two` )}>2</button>
            <button onClick={() => nav( `/data?dep=${department}&year=three` )}>3</button>
            <button onClick={() => nav( `/data?dep=${department}&year=four` )}>4</button>
        </ReactModal>
    );
}

export default Modal;
