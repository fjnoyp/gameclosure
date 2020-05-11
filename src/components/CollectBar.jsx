import React from 'react';

import { Row, Col, Container, Badge, Button, ProgressBar } from 'react-bootstrap';


const style = {
    width: '100%',
}

// props: 
// label
// collectTime
// onCollected
export class CollectBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            curTime: 0,
        }

        this.onCollectClick = this.onCollectClick.bind(this);
        this.onTimer = this.onTimer.bind(this);

        if( props.hasManager ){
            this.onCollectClick(); 
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot){
        const prevHasManager = prevProps.hasManager; 
        const hasManager = this.props.hasManager; 
        const { onCollectClick } = this; 


        if( hasManager && !prevHasManager ){
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

            if(hasManager){
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

        return (

            <React.Fragment>

                
                    {
                        
                            <Button 
                                style={style} 
                                disabled={ hasManager || (curTime > 0) }
                                onClick={onCollectClick}>
                                {label} 
                            </Button>
                        
                    }

                    {
                        
                            <ProgressBar
                                style={style}
                                variant={"success"}
                                now={curTime}
                                max={collectTime}
                            />
                        
                    }

                    <Badge style={style} variant="secondary"> {(collectTime - curTime).toFixed(0)} </Badge>


            </React.Fragment>
            

        )
    }
}