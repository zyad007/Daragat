import * as React from 'react';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';


export default function LogInModal({ isOpen, setIsOpen }) {
    const nav = useNavigate();
    return (
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form className='formm' onSubmit={(e) => {
                e.preventDefault();
                if(e.target.elements.username.value === 'AZ' && e.target.elements.pass.value === 'hacker 3rs')  {
                    nav('/admin?id=7332155');
                }else {
                    console.log('enta meen yad!!')
                }
            }}>
                <h3 style={{paddingLeft: '75px'}}>Log In</h3>
                <input  style={{padding:'10px',margin:'10px'}} type={'text'} name='username' placeholder='Username'/>
                <input  style={{padding:'10px',margin:'10px'}} name='pass' placeholder='Password' type="password" />
                <button style={{padding:'10px',margin:'10px'}}>Login</button>
            </form>
        </Modal>
    );
}
