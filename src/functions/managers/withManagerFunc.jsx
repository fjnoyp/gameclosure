import React from 'react';
//import managersConfig from '../../functions/state/managersConfig';

export default BaseComponent => ({ updateMoney, unlockManager, managerConfig, ...props }) => {

    const onHireClick = (cost) => {
        updateMoney(-cost); 
        unlockManager();
    }

    const cost = managerConfig.cost; 

    return(
        <BaseComponent

            // info 
            managerConfig={managerConfig}

            // methods 
            onHireClick={ () => onHireClick(cost) }

            {...props}
        />
    )

}
