
import React from 'react';
import { ListGroup, Button, Modal } from 'react-bootstrap';

import ManagerView from './ManagerView.jsx';

import managersConfig from '../features/gameState/managersConfig';

import { connect } from 'react-redux';

import { updateMoney, unlockManager } from '../features/gameState/businessesSlice'


function mapStateToProps(state, ownProps) {

    const { money, unlockedManagers } = state.gameState; 

    return {
        money: money, 
        unlockedManagers: unlockedManagers
    } 
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateMoney: (money) => dispatch(updateMoney(money)), 
        unlockManager: (id) => dispatch(unlockManager(id))
    };
}

const onHireClick = (id, props) => {
    const { updateMoney, unlockManager } = props; 
    const { cost } = managersConfig[id]; 

    updateMoney(cost); 
    unlockManager(id); 
}

function ManagerModal(props) { //show, handleClose) => (

    //console.log("managers modal: " ); 
    //console.log(props); 

    const { show, handleClose } = props; 

    const { money, unlockedManagers } = props; 

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
                                isUnlocked={ unlockedManagers[key] }
                                canBuy={ money >= managersConfig[key].cost}
                                onHireClick={ () => {onHireClick(key, props) } } 
                                managerConfig={managersConfig[key]} 
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

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ManagerModal); 