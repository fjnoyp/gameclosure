import { connect } from 'react-redux';
import { updateMoney, upgradeBusiness } from '../state/globalStateManager'



// extract info related to this business based on prop id 
function mapStateToProps(state, ownProps) {
  const { money, businesses, unlockedManagers } = state.gameState;

  return {
      money: money,
      businesses: businesses, 
      unlockedManagers: unlockedManagers,
  }
};

function mapDispatchToProps(dispatch, ownProps) {

  return {
      updateMoney: (money) => dispatch(updateMoney(money)),
      upgradeBusiness: (id) => dispatch(upgradeBusiness(id)),
  };
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)