import React from 'react';

import { Row, Col, Button, ProgressBar } from 'react-bootstrap';



const collectButtonStyle = {
    width: '100%', 
    whiteSpace: 'nowrap', 
}

const rowStyle = {
    width: '100%', 
    margin: 0, 
    padding: 0, 
}
const progressBarStyle = {
    width: '100%', 
    height: '100%', 
}
const timeStyle = {
    width: '100%', 
    height: '100%', 
    backgroundColor: 'grey',
    textAlign: 'center',
    whiteSpace: 'nowrap'
}

// props: 
// label
// collectTime
// onCollected
export class MoneyCollectBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            curTime: 0,
        }

        this.onCollectClick = this.onCollectClick.bind(this);
        this.onTimer = this.onTimer.bind(this);
    }

    componentDidMount() {
        const { hasManager } = this.props;

        if (hasManager) {
            this.onCollectClick();
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const prevHasManager = prevProps.hasManager;
        const hasManager = this.props.hasManager;
        const { onCollectClick } = this;


        if (hasManager && !prevHasManager) {
            onCollectClick();
        }
    }

    onTimer() {
        const { hasManager, collectTime, onCollected } = this.props;
        const { curTime } = this.state;
        const { onCollectClick } = this;

        var newCurTime = curTime + .10;


        if (newCurTime >= collectTime) {
            clearTimeout(this.timer);
            this.setState({
                curTime: 0,
            });
            onCollected();

            if (hasManager) {
                onCollectClick();
            }
        }
        else {
            this.timer = setTimeout(this.onTimer, 100);
            this.setState({
                curTime: newCurTime
            });
        }
    }

    onCollectClick() {
        this.timer = setTimeout(this.onTimer, 100);
        this.onTimer();
    }

    render() {
        const { hasManager, label, collectTime } = this.props;
        const { curTime } = this.state;

        const { onCollectClick } = this;

        const secondsDate = new Date(0); 
        secondsDate.setSeconds(collectTime - curTime); 
        const secondsLeft = secondsDate.toISOString().substr(14,5); 

        return (
            <React.Fragment>
                <Button
                    style={collectButtonStyle}
                    
                    disabled={hasManager || (curTime > 0)}
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
}