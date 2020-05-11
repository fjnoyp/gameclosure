import React from 'react';

import { store } from '../functions/state/globalStateManager'

import { Provider } from 'react-redux'

// Provide access to Redux Global State 
export default BaseComponent => ({ ...props }) => {

    return(
        <Provider store={store}>

        <BaseComponent 
            {...props}
        />

        </Provider>
    )

}
