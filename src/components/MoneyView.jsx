import React from 'react';
import { connect } from 'react-redux'; 

const mapStateToProps = (state) => {
    return { 
        money: state.gameState.money
    }
}

function MoneyView(props) {
    const { money } = props; 


    return(
        <h2> $ {money.toFixed(2)} </h2>   
    )
}

export default connect(
    mapStateToProps
)(MoneyView); 
  