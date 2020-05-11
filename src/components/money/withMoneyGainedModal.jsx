import React, { useState } from 'react';
import MoneyGainedModal from './MoneyGainedModal'; 

export default BaseComponent => ({ ...props }) => {

    const [showMoneyGainedModal, setShowMoneyGainedModal] = useState(true); 
    

    return(
        <React.Fragment>

        <MoneyGainedModal show={showMoneyGainedModal} handleClose={() => setShowMoneyGainedModal(false)}/>

        <BaseComponent 
            {...props}
        />

        </React.Fragment>
    )

}
