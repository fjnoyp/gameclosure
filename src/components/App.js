import React from 'react';

import { Button, Navbar } from 'react-bootstrap';

// Custom Imports 
import BusinessesGrid from './businesses/BusinessesGrid.jsx';
import MoneyView from './money/MoneyView.jsx';

import withGlobalState from './withGlobalState.jsx'
import withManagerModal from './managers/withManagerModal.jsx';
import withMoneyGainedModal from './money/withMoneyGainedModal.jsx';




const modalShowButtonStyle = {
  fontSize: '14px',
}

function App(props) {

  const { toggleManagerModalShow } = props;

  return (

    <React.Fragment>

      <Navbar bg="dark" variant="dark">

        <Button style={modalShowButtonStyle} onClick={toggleManagerModalShow}> Get Managers </Button>

        <MoneyView />

      </Navbar>

      <BusinessesGrid />

    </React.Fragment>
  );

}

export default withGlobalState(withMoneyGainedModal(withManagerModal(App)));








