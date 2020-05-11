import React, { useState } from 'react';

// Custom Imports 
import ManagerModal from './ManagerModal';

// HOC that embeds ManagerModal into BaseComponent and provides function to show/hide 
export default BaseComponent => ({ ...props }) => {

    const [showManagerModal, setShowManagerModal] = useState(false);


    return (
        <React.Fragment>

            <ManagerModal show={showManagerModal} handleClose={() => setShowManagerModal(false)} />

            <BaseComponent
                toggleManagerModalShow={() => setShowManagerModal(!showManagerModal)}
                {...props}
            />

        </React.Fragment>
    )

}
