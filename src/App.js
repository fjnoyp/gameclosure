import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Modal, Button } from 'react-bootstrap';

import Popup from "reactjs-popup";

import StoreGrid from './StoreGrid.jsx'; 







const parentStyle = {
  display: 'flex', 
  flexDirection: 'row',
  minHeight: '100vh'
}

const leftStyle = {
  backgroundColor: 'red', 
  flexShrink: '0', 
  //width: '200px',
}

const leftButton = { 
  margin: '25px',
}

const rightStyle = {
  backgroundColor: 'green',
  //width: 'calc(100% - 200px)',
}

const storeGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',  
  height: '80%',
  padding: '5%',

  color: 'white',  
  textAlign: 'center',  
}

const totalMoneyStyle = {
  color: 'white',
  margin: '2%',
}

function App() {
  return (
    <div className="App">

      <Modal show={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



      <div style={parentStyle}>

        <div style={leftStyle}> 

          <button style={leftButton}> Managers </button>

        </div>

        <div style={rightStyle}> 

          <h2 style={totalMoneyStyle}> $99,999,999,999,999.99 </h2> 

          <StoreGrid/>
        
        </div> 
      </div>
      
    </div>
  );
}

export default App;








