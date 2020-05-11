import React from 'react';

import { Button, Container, Row, Col } from 'react-bootstrap';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { MoneyCollectBar } from './MoneyCollectBar.jsx';


const upgradeButtonStyle = {
    width: '100%',
    height: '100%',
    whiteSpace: 'nowrap',
}


export default function BusinessManagementView(props) {

    const { canBuy, hasManager, delay, income, upgradeCost, onCollected, onUpgradeClick } = props; 

    return(
        <Container>
            <Row>
                <Col>
                    <MoneyCollectBar 
                        autoCollect={hasManager}
                        label={"+ $" + income} 
                        collectTime={delay} 
                        onCollected={onCollected} 
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button variant="info" style={upgradeButtonStyle} disabled={ !canBuy } onClick={onUpgradeClick}>
                        <FontAwesomeIcon icon={faArrowUp} /> {"$"+upgradeCost}
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}