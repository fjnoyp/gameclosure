import React from 'react';

import { Row, Col, Button, ProgressBar } from 'react-bootstrap';

// Custom Imports 
import withTimer from './withTimer'; 

const collectButtonStyle = {
    width: '100%', 
    whiteSpace: 'nowrap', 
    padding: '2px',
    fontWeight: 'bold',
    borderRadius: '8px 8px 0px 0px'
}
const rowStyle = {
    width: '100%', 
    margin: 0, 
    padding: 0, 
    boxShadow: '3px 3px 3px grey'
}
const progressBarStyle = {
    width: '100%', 
    height: '100%', 
    borderRadius: '0px'
}
const timeStyle = {
    width: '100%', 
    height: '100%', 
    color: 'white', 
    background: 'grey',
    textAlign: 'center',
    whiteSpace: 'nowrap', 
}


// Displays time delay bar for collecting money from a business 
// Provides button to start collecting from business 
function MoneyCollectBar(props){

    const { autoCollect, label, collectTime } = props;
    const { curTime, onCollectClick } = props; 

    const secondsDate = new Date(0); 
    secondsDate.setSeconds(collectTime - curTime); 
    const secondsLeft = secondsDate.toISOString().substr(14,5); 

    return (
        <React.Fragment>
            <Button
                style={collectButtonStyle}
                
                disabled={autoCollect || (curTime > 0)}
                onClick={onCollectClick}>
                {label}
            </Button>

            <Row style={rowStyle}>
                <Col xs={8} style={rowStyle}>
                    <ProgressBar
                        style={progressBarStyle}
                        variant={"success"}
                        now={curTime}
                        max={collectTime}
                    />
                    </Col>
                    <Col xs={4} style={rowStyle}>
                    <div style={timeStyle} variant="secondary"> {secondsLeft} </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default withTimer(MoneyCollectBar); 