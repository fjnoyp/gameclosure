import React from 'react';
import { connect } from 'react-redux'; 

const moneyStyle = {
    color: 'white', 
    fontSize: 50,
}

const mapStateToProps = (state) => {
    return { 
        money: state.gameState.money
    }
}

function MoneyView(props) {
    const { money } = props; 


    return(
        <h1 style={moneyStyle}> $ {money.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </h1>   
    )
}

export default connect(
    mapStateToProps
)(MoneyView); 
  