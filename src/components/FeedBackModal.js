import React from 'react';
import Modal from '@mui/material/Modal';

const FeedBackModal = ({ isOpen, setIsOpen }) => {

    const prod = "https://silly-cannon.74-50-88-98.plesk.page/";
    const dev = "http://localhost:5555/";

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form className='formm' onSubmit={(e) => {
                    e.preventDefault();
                    const message = {
                        title: e.currentTarget.elements[0].value,
                        body: e.currentTarget.elements[1].value
                    }
                    fetch(dev.concat('report'),
                    {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(message)
                      })
                        .then(res => {
                            return res.json()
                        })
                        .then(
                            (result) => {
                                console.log(result);
                            }
                        ).catch((error) => {
                            console.log(error);
                        })
                    setIsOpen(false)
                }}>
                    <h3 style={{ paddingLeft: '10px' }}>Send Feedback</h3>
                    <select style={{ padding: '10px', margin: '10px' }}>
                        <option value="feedback">Feedback</option>
                        <option value="report">Report a problem</option>
                    </select>
                    <textarea style={{ padding: '10px', margin: '10px', height: '200px', width: '400px' }} name='message' placeholder='type here..' />
                    <button style={{ padding: '10px', margin: '10px' }}>Send</button>
                </form>
            </Modal>
        </div>
    );
}

export default FeedBackModal;
