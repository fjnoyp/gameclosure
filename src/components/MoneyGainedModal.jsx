
import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';

import { offlineTime, offlineIncome } from '../functions/state/globalStateStorageManager'; 



export default function MoneyGainedModal(props) { //show, handleClose) => (
    const { handleClose } = props; 

    useEffect(() => {
        if(offlineTime < 10 || offlineIncome < 1) handleClose();     
    }); 

    return (
        <Modal 
            show={true} 
            onHide={handleClose}
            centered
            size="lg"
        >

            <Modal.Header closeButton>
                <Modal.Title> Welcome Back! </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <p> You were gone for {offlineTime} seconds </p>

                <p> In the meantime you earned ${offlineIncome} </p>

            </Modal.Body>

            <Modal.Footer>

            </Modal.Footer>

        </Modal>
    )
}
