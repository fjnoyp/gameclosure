
import React from 'react';
import { ListGroup, Button, Modal } from 'react-bootstrap';

import ManagerView from './ManagerView.jsx';

import managersConfig from '../../functions/state/config/managersConfig';

import withManagers from '../../functions/managers/withManagers'; 


function ManagerModal(props) { //show, handleClose) => (

    //console.log("managers modal: " ); 
    //console.log(props); 

    const { show, handleClose } = props; 

    const { money, unlockedManagers } = props; 

    const { updateMoney, unlockManager } = props; 

    return (
        <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title> Managers </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <h4>Managers make life easier!</h4>

                <p>Hire one to run your buiness for you, or to maximize efficiency, all for just one easy payment!  Salary schmalary!</p>

                <ListGroup>
                    {
                        Object.keys(managersConfig).map(key => {
                            return <ManagerView 
                                key={key}

                                // manager info 
                                isUnlocked={unlockedManagers[key]}
                                money={money}
                                managerConfig={managersConfig[key]} 

                                // methods
                                updateMoney={updateMoney}
                                unlockManager={() => unlockManager(key)}
                                />
                        })
                    }

                </ListGroup>



            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
          </Button>
            </Modal.Footer>

        </Modal>
    )
}

export default withManagers(ManagerModal); 