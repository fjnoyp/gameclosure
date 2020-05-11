

import { connect } from 'react-redux';

import { updateMoney, unlockManager } from '../state/globalStateManager'


function mapStateToProps(state, ownProps) {

    const { money, unlockedManagers } = state.gameState; 

    return {
        money: money, 
        unlockedManagers: unlockedManagers
    } 
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateMoney: (money) => dispatch(updateMoney(money)), 
        unlockManager: (id) => dispatch(unlockManager(id))
    };
}




export default connect(
    mapStateToProps, 
    mapDispatchToProps
)

