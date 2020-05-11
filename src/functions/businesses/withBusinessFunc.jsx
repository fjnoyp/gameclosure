import React from 'react';

// Custom Imports 
import { GetIncome, GetUpgradeCost} from '../../config/businessesConfig'; 

// Derive additional business info/methods from businesses in Redux Global State
export default BaseComponent => ({ updateMoney, upgradeBusiness, business, ...props }) => {

    const onCollected = (income) => {
        updateMoney( income ); 
    }
    const onUpgradeClick = (upgradeCost) => {
        updateMoney( -upgradeCost ); 
        upgradeBusiness(); 
    }

    const income =  GetIncome(business.level, business );
    const upgradeCost = GetUpgradeCost(business.level, business ); 

    return(
        <BaseComponent 

            // info
            income={income}
            upgradeCost={upgradeCost}
            business={business}

            // methods 
            onCollected={ () => onCollected(income) }
            onUpgradeClick={ () => onUpgradeClick(upgradeCost) }

            {...props}
        />
    );
};

