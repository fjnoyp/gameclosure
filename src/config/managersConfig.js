
// Custom Imports 
import businessesConfig from './businessesConfig.js'; 

var managersConfig = {}; 

function businessToManagerCost(business){
    return (business.startIncome * 500) + (business.upgradeIncome * 2000); 
}

// Below is the config for all managers + properties 
// Auto generated from businessConfig 
for( var key in businessesConfig ){
    const business = businessesConfig[key]; 
    const { name, icon } = business; 
    
    managersConfig[key] = {
        name: name + " Manager",
        description: "Runs your " + name, 
        icon: icon,
        cost: businessToManagerCost(business),
    }
}

export default managersConfig; 
