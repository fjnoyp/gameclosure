import React from 'react';

import { Button, ListGroup } from 'react-bootstrap';

// Custom Imports 
import withManagerFunc from '../../functions/managers/withManagerFunc';
import formatMoney from '../../functions/helper/formatMoney'; 
import formatName from '../../functions/helper/formatName';


const managerStyle = {
    display: 'flex',
    direction: 'row',
}
const iconViewStyle = {
    width: '30%'
}

const midStyle = {
    marginLeft: '10px',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto'
}


function ManagerView(props) {

    const { isUnlocked, money, onHireClick, managerConfig } = props;
    const { name, description, cost, icon } = managerConfig;

    const canBuy = (money >= cost);

    return (
        <ListGroup.Item>

            <div style={managerStyle}>

                <img
                    style={iconViewStyle}
                    src={icon}
                    alt="business manager"
                />

                <div style={midStyle}>
                    <h4> {formatName(name)} </h4>
                    <p> {description} </p>
                    <h5> {"$" + formatMoney(0,cost)} </h5>
                </div>

                <Button
                    disabled={!canBuy || isUnlocked}
                    onClick={onHireClick}
                    variant={isUnlocked ? "danger" : "primary"}
                >
                    {isUnlocked && "Hired"}
                    {!isUnlocked && "Hire!"}
                </Button>
                
            </div>

        </ListGroup.Item>
    )
}

export default withManagerFunc(ManagerView); 