import SelectionContext from '../../context/SelectionContext';
import { useNavigate } from 'react-router-dom';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ButtonGroup from '@mui/material/ButtonGroup';


// const Modal = ({department}) => {
//     const { isOpen, setIsOpen } = useContext(SelectionContext);

//     const navigate = useNavigate();

//     const nav = (e) => navigate( `/data?dep=${department}&year=${e.target.innerText}` );

//     return (
//         <ReactModal 
//             isOpen={isOpen}
//             shouldCloseOnOverlayClick={true}
//             shouldCloseOnEsc={true}
//             ariaHideApp={false}
//             >
//             <button onClick={() => setIsOpen(false) }>x</button>
//             <button onClick={nav}>1</button>
//             <button onClick={nav}>2</button>
//             <button onClick={nav}>3</button>
//             <button onClick={nav}>4</button>
//         </ReactModal>
//     );
// }



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    justifiyContent: 'center'
    
};

export default function BasicModal({ department }) {
    const { isOpen, setIsOpen } = React.useContext(SelectionContext);
    const navigate = useNavigate();
    const nav = (e) => navigate(`/data?dep=${department}&year=${e.target.innerText}`);
    return (
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h3>Select Year</h3>
                <ButtonGroup variant="outlined" aria-label="outlined button group" className='a7a'>
                    <Button onClick={nav} >One</Button>
                    <Button onClick={nav} >Two</Button>
                    <Button onClick={nav} >Three</Button>
                    <Button onClick={nav} >Four</Button>
                </ButtonGroup>
            </Box>
        </Modal>
    );
}
