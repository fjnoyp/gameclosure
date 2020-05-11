import React from 'react';

import { Card, Container, Row, Col } from 'react-bootstrap';


// Custom Imports 

// HOC - data load 
import withBusinessFunc from '../../functions/businesses/withBusinessFunc.jsx';

// Children components 
import OpenBusinessButton from './components/OpenBusinessButton'; 
import BusinessIconView from './components/BusinessIconView'; 
import BusinessManagementView from './components/BusinessManagementView'; 
import formatName from '../../functions/helper/formatName.js';


const containerStyle = {
    minHeight: '15vh',
    padding: '10px', 
}


function BusinessView(props) {

    const { money, income, upgradeCost, hasManager, business } = props;
    const { name, level, delay, icon } = business;

    const { onUpgradeClick, onCollected } = props; 

    const canBuy = (money >= upgradeCost); 

        return (
            <Card border="primary">

                <Container style={containerStyle}>

                    { level === 0 &&

                        <OpenBusinessButton
                            canBuy={canBuy}
                            name={formatName(name)}
                            upgradeCost={upgradeCost}
                            onUpgradeClick={onUpgradeClick}
                        />
                    
                    }

                    { level > 0 && 
                    <Row>

                        <Col xs={4}>
                            <BusinessIconView
                                level={level}
                                icon={icon}
                            />
                        </Col>

                        <Col xs={8}>
                            <BusinessManagementView
                                canBuy={canBuy}
                                hasManager={hasManager}
                                delay={delay}
                                income={income}
                                upgradeCost={upgradeCost}
                                onCollected={onCollected}
                                onUpgradeClick={onUpgradeClick}
                            />
                        </Col>

                    </Row>
                    }

                </Container>

            </Card>
        );
    }

    export default withBusinessFunc(BusinessView);