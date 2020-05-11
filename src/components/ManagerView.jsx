import React from 'react';

import { Alert, Button, ListGroup } from 'react-bootstrap'; 

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


export default function ManagerView(props) {

    const { isUnlocked, canBuy, onHireClick, managerConfig } = props; 
    const { name, description, faIcon, cost } = managerConfig; 
  
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