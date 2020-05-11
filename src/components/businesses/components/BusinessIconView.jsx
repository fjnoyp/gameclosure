import React from 'react';

import { ProgressBar } from 'react-bootstrap';

const progressBarStyle = {
    width: '100%',    
}


export default function BusinessIconView(props) {
    const { level, icon } = props; 

    return(
        <div>
            <img alt="business icon" src={icon}/>
            <ProgressBar style={progressBarStyle} variant={"warning"} now={level % 100} label={level} />
        </div>
    )
}