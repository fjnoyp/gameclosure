import React from 'react';

import { Card, ProgressBar, Container, Row, Col, Button } from 'react-bootstrap';

import { faCircle, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import { MoneyCollectBar } from './MoneyCollectBar.jsx';
import withBusinessFunc from '../../functions/businesses/withBusinessFunc.jsx';



const containerStyle = {
    minHeight: '150px',
    height: '15vh',
}

const progressBarStyle = {
    width: '100%',    
}

const iconViewStyle = {
    fontSize: '75px',
    width: '100%',
}

const upgradeButtonStyle = {
    width: '100%',
    height: '100%',
    whiteSpace: 'nowrap',
}




function BusinessView(props) {

    //console.log(props); 

    const { money, income, upgradeCost, hasManager, business } = props;
    const { name, level, delay, faIcon } = business;

    const { onUpgradeClick, onCollected } = props; 

    const canBuy = (money >= upgradeCost); 


        return (
            <Card border="primary">

                <Container style={containerStyle}>

                    { level === 0 &&

                        <Button 
                        variant={"warning"}
                        style={upgradeButtonStyle}
                        disabled={ !canBuy } 
                        onClick={onUpgradeClick}
                        >
                        <h3> {name} </h3> 
                        <h4> {upgradeCost} </h4> 
                        </Button>
                    
                    }

                    { level > 0 && 
                    <Row>

                        <Col xs={4}>
                            <div>

                                <FontAwesomeIcon style={iconViewStyle} icon={faIcon} />

                                <ProgressBar style={progressBarStyle} variant={"warning"} now={level % 100} label={level} />
                            </div>
                        </Col>

                        <Col xs={8}>
                            <Container>
                                <Row>
                                    <Col>
                                        <MoneyCollectBar 
                                            hasManager={hasManager}
                                            label={"+ $" + income} 
                                            collectTime={delay} 
                                            onCollected={onCollected} 
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Button style={upgradeButtonStyle} disabled={ !canBuy } onClick={onUpgradeClick}>
                                            <FontAwesomeIcon icon={faArrowUp} /> {"$"+upgradeCost}
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>

                    </Row>
                    }

                </Container>

            </Card>
        );
    }

    export default withBusinessFunc(BusinessView);