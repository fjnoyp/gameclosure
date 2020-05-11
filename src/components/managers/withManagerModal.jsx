import React, { useState } from 'react';
import ManagerModal from './ManagerModal'; 

export default BaseComponent => ({ ...props }) => {

    const [showManagerModal, setShowManagerModal] = useState(false); 
    

    return(
        <React.Fragment>

        <ManagerModal show={showManagerModal} handleClose={() => setShowManagerModal(false)}/>

        <BaseComponent 
            toggleManagerModalShow={ () => setShowManagerModal(!showManagerModal) }
            {...props}
        />

        </React.Fragment>
    )

}
