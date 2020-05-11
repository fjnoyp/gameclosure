import React from 'react';
import { ListGroup, Button, Modal } from 'react-bootstrap';

// Custom Imports 
import ManagerView from './ManagerView.jsx';
import managersConfig from '../../config/managersConfig';
import withManagers from '../../functions/managers/withManagers';


const titleStyle = {
    textAlign: 'center',
    fontSize: '50px',
    fontWeight: 'bold',
    width: '100%',
}

const subTitleStyle = {
    textAlign: 'center',
}

function ManagerModal(props) {

    // Input props 
    const { show, handleClose } = props;

    // Props from HOC 
    const { money, unlockedManagers } = props;

    // Methods
    const { updateMoney, unlockManager } = props;

    return (
        <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title style={titleStyle}> Managers </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <h4 style={subTitleStyle}> Managers make life easier! </h4>

                <p>Hire one to run your business for you.</p>  
                <p>Maximize efficiency for one easy payment!</p>

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