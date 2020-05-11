import React from 'react';

import { GetIncome, GetUpgradeCost} from '../state/config/businessesConfig';


export default BaseComponent => ({ updateMoney, upgradeBusiness, business, ...props }) => {

    const onCollected = (income) => {
        updateMoney( income ); 
    }
    const onUpgradeClick = (upgradeCost) => {
        updateMoney( -upgradeCost ); 
        upgradeBusiness(); 
    }

    const income = GetIncome(business.level, business )
    const upgradeCost = GetUpgradeCost(business.level, business )

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

