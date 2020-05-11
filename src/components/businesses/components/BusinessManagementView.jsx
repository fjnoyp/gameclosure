import React from 'react';

import { Button, Container, Row, Col } from 'react-bootstrap';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Custom Imports 
import MoneyCollectBar from './MoneyCollectBar.jsx';
import formatMoney from '../../../functions/helper/formatMoney'; 


const upgradeButtonStyle = {
    width: '100%',
    height: '100%',
    whiteSpace: 'nowrap',
    padding: '2px',
    borderRadius: '0px 0px 8px 8px'
}

// Buttons for collecting/upgrading a Business 
export default function BusinessManagementView(props) {

    const { canBuy, hasManager, delay, income, upgradeCost, onCollected, onUpgradeClick } = props; 

    return(
        <Container>
            <Row>
                <Col>
                    <MoneyCollectBar 
                        autoCollect={hasManager}
                        label={"Collect $" + formatMoney(0,income)} 
                        collectTime={delay} 
                        onCollected={onCollected} 
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button variant="warning" style={upgradeButtonStyle} disabled={ !canBuy } onClick={onUpgradeClick}>
                        {"Upgrade "}
                        { <FontAwesomeIcon icon={faArrowUp} /> } 
                        {" $"+ formatMoney(0,upgradeCost)} 
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}