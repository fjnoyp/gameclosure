
import React, { useEffect } from 'react';

import { Modal } from 'react-bootstrap';

// Custom Imports 
import { offlineTime, offlineIncome } from '../../functions/state/globalStateStorageManager'; 


// Modal displaying money gained while offline 
export default function MoneyGainedModal(props) { 
    const { show, handleClose } = props; 

    useEffect(() => {
        if(offlineTime < 10 || offlineIncome < 1) handleClose();     
    }); 

    return (
        <Modal 
            show={show} 
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
