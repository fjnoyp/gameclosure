import React from 'react';
import { connect } from 'react-redux'; 

const mapStateToProps = (state) => {
    return { 
        money: state.gameState.money
    }
}

export default connect(
    mapStateToProps
)( ({money}) => 
(

    <h2> $ {money.toFixed(2)} </h2> 
          
)
)
  
  