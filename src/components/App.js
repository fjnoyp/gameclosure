//import './App.css'; 

import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';

import BusinessesGrid from './businesses/BusinessesGrid.jsx'; 
import MoneyView from './money/MoneyView.jsx'; 


import withGlobalState from './withGlobalState.jsx'
import withManagerModal from './managers/withManagerModal.jsx'; 
import withMoneyGainedModal from './money/withMoneyGainedModal.jsx'; 




const navbarStyle = {
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(71,71,130,1) 100%, rgba(0,212,255,1) 100%)"
}

function App(props) {

    const { toggleManagerModalShow } = props; 

  return (
    
    <React.Fragment>

      <Navbar bg="dark" variant="dark"> 
        <Navbar.Brand>
        <MoneyView/>
        </Navbar.Brand>

        <Button onClick={toggleManagerModalShow}> Managers </Button>
        </Navbar>

      <BusinessesGrid/>
    
    </React.Fragment>
  );
  
  }

export default withGlobalState( withMoneyGainedModal( withManagerModal(App))); 








