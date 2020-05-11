import React from 'react';

import { Button, ListGroup } from 'react-bootstrap'; 

import withManagerFunc from '../../functions/managers/withManagerFunc'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const managerStyle = {
    display: 'flex',
    direction: 'row',
}
const iconViewStyle = {
    marginTop: 'auto', 
    marginBottom: 'auto', 
    fontSize: '50px',    
}

const midStyle = {
    margin: 'auto'
}


function ManagerView(props) {

    const { isUnlocked, money, onHireClick, managerConfig } = props; 
    const { name, description, faIcon, cost } = managerConfig; 

    //console.log(managerConfig); 
    
    const canBuy = (money >= cost); 
  
  return(
    <ListGroup.Item>

                    <div style={managerStyle}>

                        <FontAwesomeIcon 
                            style={iconViewStyle}
                            icon={faIcon} />

                        <div style={midStyle}>

                            <h4> {name} </h4>
                            <p> {description} </p>
                                <h5> {cost} </h5>


                        </div>

                        
                            <Button 
                                disabled={!canBuy || isUnlocked} 
                                onClick={onHireClick}
                                variant={ isUnlocked ? "danger" : "primary"}
                                > 

                                { isUnlocked  && "Hired" } 
                                { !isUnlocked && "Hire!" } 
                            
                            </Button>
                        




                    </div>

                </ListGroup.Item>
  )

          
}

export default withManagerFunc(ManagerView); 