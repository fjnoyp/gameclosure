import React from 'react';
import { useState, useEffect } from 'react';


import { Badge, Card, ProgressBar, Container, Row, Col, Button } from 'react-bootstrap';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { connect } from 'react-redux';
import { updateMoney, upgradeBusiness } from '../features/gameState/businessesSlice'

import businessesConfig from '../features/gameState/businessesConfig';
import { GetUpgradeCost, GetIncome } from '../features/gameState/businessesConfig';

import { CollectBar } from './CollectBar.jsx';




const style = {
    flexDirection: 'row',
    height: '40%',
}

const maxWidthStyle = {
    width: '100%',
}

const iconViewStyle = {
    fontSize: '100px',
    width: '100%',
}

const upgradeButtonStyle = {
    width: '100%',
    height: '100%',
}


//TODO move to BusinessesGrid
// make BusinessView "dumb" view just like ManagerView 3

// extract info related to this business based on prop id 
function mapStateToProps(state, ownProps) {

    //console.log("redraw"); 

    const { money, businesses, unlockedManagers } = state.gameState;
    const { id } = ownProps;

    var businessConfig = businessesConfig[id];
    var businessState = businesses[id];

    // Default business state
    if (businessState === undefined) {
        businessState = {
            level: 0
        }
    }

    const { level } = businessState;

    return {
        money: money,
        business: {
            ...businessConfig,
            ...businessState,
            upgradeCost: GetUpgradeCost(level, businessConfig),
            income: GetIncome(level, businessConfig)
        }, 
        hasManager: unlockedManagers[id],
    }
};

function mapDispatchToProps(dispatch, ownProps) {
    const { id } = ownProps;

    return {
        upgradeBusiness: () => dispatch(upgradeBusiness(id)),
        updateMoney: (money) => dispatch(updateMoney(money))
    };
}




class BusinessView extends React.Component {
    constructor(props) {
        super(props);
        this.onCollected = this.onCollected.bind(this);
        this.onUpgradeClick = this.onUpgradeClick.bind(this); 
    }

    onCollected() {
        // temp 
        const { updateMoney, business } = this.props;
        const { income } = business;

        updateMoney(income);
    }

    onUpgradeClick(){
        const { updateMoney, upgradeBusiness, business } = this.props; 
        const { upgradeCost} = business;

        updateMoney( -upgradeCost ); 
        upgradeBusiness(); 
    }


    render() {

        const { money, hasManager, business } = this.props;
        const {  name, upgradeCost, income, level, delay, faIcon } = business;
        const { onCollected, onUpgradeClick } = this;

        return (
            <Card border="primary" style={style}>

                <Container>

                    { level === 0 &&

                        <Button 
                        variant={"warning"}
                        style={upgradeButtonStyle}
                        disabled={(money < upgradeCost)}
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

                                <FontAwesomeIcon size={'100%'} style={iconViewStyle} icon={faIcon} />

                                <ProgressBar style={maxWidthStyle} variant={"warning"} now={level % 100} label={level} />
                            </div>
                        </Col>

                        <Col xs={8}>
                            <Container>
                                <Row>
                                    <Col>
                                        <CollectBar 
                                            hasManager={hasManager}
                                            label={"+ " + income} 
                                            collectTime={delay} 
                                            onCollected={onCollected} 
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Button style={upgradeButtonStyle} disabled={(money < upgradeCost)} onClick={onUpgradeClick}>
                                            <FontAwesomeIcon icon={faArrowUp} /> {business.upgradeCost}
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
}



export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BusinessView); 