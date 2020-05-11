import React from 'react';

import { connect } from 'react-redux'; 

// Custom Imports 
import formatMoney from '../../functions/helper/formatMoney';


const moneyStyle = {
    margin: 'auto',
    color: 'white', 
    fontWeight: '800',
}

const mapStateToProps = (state) => {
    return { 
        money: state.gameState.money
    }
}

// Displays current money 
function MoneyView(props) {
    const { money } = props; 


    return(
        <h2 style={moneyStyle}> $ {formatMoney(2,money)} </h2>   
    )
}

export default connect(
    mapStateToProps
)(MoneyView); 
  