import React from 'react';

import { ProgressBar } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const progressBarStyle = {
    width: '100%',    
}

const iconViewStyle = {
    fontSize: '75px',
    width: '100%',
}

export default function BusinessIconView(props) {

    const { level, faIcon } = props; 

    return(
        <div>
            <FontAwesomeIcon style={iconViewStyle} icon={faIcon} />
            <ProgressBar style={progressBarStyle} variant={"warning"} now={level % 100} label={level} />
        </div>
    )
}