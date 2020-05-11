import React from 'react';


// Derive additional manager info/methods from managers in Redux Global State
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
