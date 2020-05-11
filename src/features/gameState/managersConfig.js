
// auto generate manager costs from existing businessConfig.js 

import businessesConfig from './businessesConfig.js'; 


var managersConfig = {}; 

function businessToManagerCost(business){
    return (business.startIncome * 500) + (business.upgradeIncome * 2000); 
}


for( var key in businessesConfig ){
//Object.keys(businessesConfig).map(key => {

//console.log("key: " + key); 

    const business = businessesConfig[key]; 
    const { name, faIcon } = business; 

    var currentBusiness = businessesConfig[key]; 

    managersConfig[key] = {
        name: name + " manager",
        description: "Runs your " + name + " business", 
        faIcon: faIcon,
        cost: businessToManagerCost(business),
    }
    
}


//console.log("generated managers: " ); 
//console.log(managersConfig); 

export default managersConfig; 
