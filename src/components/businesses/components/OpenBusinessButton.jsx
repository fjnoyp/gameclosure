import React from 'react';

import { Button } from 'react-bootstrap';
import formatMoney from '../../../functions/helper/formatMoney';

const buttonStyle = {
    width: '100%',
    height: '12vh',
    whiteSpace: 'nowrap',
}

const storeNameStyle = { 
    fontFamily: 'arial',
    color: 'black',
    fontWeight: 'bold'
}

// Initial button displayed when business is not unlocked 
export default function OpenBusinessButton(props) {

    const { canBuy, name, upgradeCost, onUpgradeClick } = props; 

    return(
        <Button 
            variant="warning"
            style={buttonStyle}
            disabled={ !canBuy } 
            onClick={onUpgradeClick}
        >
            <h3 style={storeNameStyle}> {name} </h3> 
            <h4> {"$"+ formatMoney(0,upgradeCost) } </h4>
        </Button>
    )
}