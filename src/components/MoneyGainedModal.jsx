
import React from 'react';
import { ListGroup, Button, Modal } from 'react-bootstrap';

import { offlineTime, offlineIncome } from '../features/gameState/businessesSlice'; 

import { connect } from 'react-redux';



export default function MoneyGainedModal(props) { //show, handleClose) => (


    const { handleClose } = props; 

    if(offlineTime < 10) handleClose(); 



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
