import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import BusinessesGrid from './BusinessesGrid.jsx'; 
import MoneyView from './MoneyView.jsx'; 

import ManagerModal from './ManagerModal.jsx'; 
import MoneyGainedModal from './MoneyGainedModal.jsx'; 

import { store } from '../features/gameState/businessesSlice'

import { Provider } from 'react-redux'




class App extends React.Component {

  constructor(props){
    super(props); 
    this.state = { 
      showManagerModal: false, 
      showMoneyGainedModal: true,       
    };


    this.toggleManagerModalShow = this.toggleManagerModalShow.bind(this); 
    this.toggleMoneyModalShow = this.toggleMoneyModalShow.bind(this); 


  }

  toggleManagerModalShow(){
    this.setState({
      showManagerModal: !this.state.showManagerModal
    })
  }

  toggleMoneyModalShow(){
    this.setState({
      showMoneyGainedModal: false, 
    })
  }

  render(){

    const { toggleManagerModalShow, toggleMoneyModalShow } = this; 
    const { showManagerModal, showMoneyGainedModal } = this.state; 

  return (
    <Provider store={store}>
    <React.Fragment>

      { showMoneyGainedModal && 
        <MoneyGainedModal handleClose={toggleMoneyModalShow}/>
      }

      <ManagerModal show={showManagerModal} handleClose={toggleManagerModalShow} />
    
      <Row className="justify-content-md-center"> 
        <Col xs={2}> 
          <Button onClick={toggleManagerModalShow}> Managers </Button>
        </Col>

        <Col xs={10}>
          
            <MoneyView/>

            { /*<h2 style={totalMoneyStyle}> $99,999,999,999,999.99 </h2> */}
            <BusinessesGrid/>
          
        </Col>

      </Row>
    
      </React.Fragment>
      </Provider>
  );
  }
  }

export default App;








