import React from 'react';

import { Button } from 'react-bootstrap';

const buttonStyle = {
    width: '100%',
    height: '100%',
    whiteSpace: 'nowrap',
}

export default function OpenBusinessButton(props) {

    const { canBuy, name, upgradeCost, onUpgradeClick } = props; 

    return(
        <Button 
            variant="warning"
            style={buttonStyle}
            disabled={ !canBuy } 
            onClick={onUpgradeClick}
        >
            <h3> {name} </h3> 
            <h4> {upgradeCost} </h4> 
        </Button>
    )
}