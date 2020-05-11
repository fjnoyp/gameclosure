import React, { useState } from 'react';
import MoneyGainedModal from './MoneyGainedModal';

// HOC that embeds MoneyGainedModal into BaseComponent and provides function to show/hide 
export default BaseComponent => ({ ...props }) => {

    const [showMoneyGainedModal, setShowMoneyGainedModal] = useState(true);


    return (
        <React.Fragment>

            <MoneyGainedModal show={showMoneyGainedModal} handleClose={() => setShowMoneyGainedModal(false)} />

            <BaseComponent
                {...props}
            />

        </React.Fragment>
    )

}
