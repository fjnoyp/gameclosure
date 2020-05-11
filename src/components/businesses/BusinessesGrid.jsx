import React from 'react';

import { CardColumns } from 'react-bootstrap'; 

// Custom Imports 
import businessesConfig from '../../config/businessesConfig';
import BusinessView from './BusinessView.jsx'; 
import withBusinesses from '../../functions/businesses/withBusinesses';

// Displays grid of all businesses 
function BusinessesGrid(props){

  const { money, unlockedManagers, businesses } = props; 
  const { updateMoney, upgradeBusiness } = props; 

  return(
    <CardColumns>
      {
        Object.keys(businessesConfig).map(key => {
          return <BusinessView 
                    key={key} 

                    // info 
                    money={money} 
                    hasManager={unlockedManagers[key]}
                    business={{
                      ...businesses[key],
                      ...businessesConfig[key]
                    }}

                    // methods 
                    updateMoney={updateMoney}
                    upgradeBusiness={() => upgradeBusiness(key)}
                  />
        })
      }
    </CardColumns>
  )
}


  export default withBusinesses(BusinessesGrid); 
  

  
