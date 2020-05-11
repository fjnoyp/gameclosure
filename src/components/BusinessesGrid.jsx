import React from 'react';

import { CardColumns } from 'react-bootstrap'; 

import businessesConfig from '../features/gameState/businessesConfig';

import BusinessView from './BusinessView.jsx'; 

  export default () => (

    <CardColumns>

{

Object.keys(businessesConfig).map(key => {
  return <BusinessView key={key} id={key}/>
})

}


    </CardColumns>
          
  ) 
  
  
  

  
