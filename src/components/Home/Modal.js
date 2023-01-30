import React, { useContext } from 'react';
import ReactModal from 'react-modal';
import SelectionContext from '../../context/SelectionContext';
import { useNavigate } from 'react-router-dom';

const Modal = ({department}) => {
    const { isOpen, setIsOpen } = useContext(SelectionContext);

    const navigate = useNavigate();

    const nav = (e) => navigate( `/data?dep=${department}&year=${e.target.innerText}` );
    
    return (
        <ReactModal 
            isOpen={isOpen}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            ariaHideApp={false}
            >
            <button onClick={() => setIsOpen(false) }>x</button>
            <button onClick={nav}>1</button>
            <button onClick={nav}>2</button>
            <button onClick={nav}>3</button>
            <button onClick={nav}>4</button>
        </ReactModal>
    );
}

export default Modal;