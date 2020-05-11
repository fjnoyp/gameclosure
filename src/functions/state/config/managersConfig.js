import businessesConfig from './businessesConfig.js'; 

var managersConfig = {}; 

function businessToManagerCost(business){
    return (business.startIncome * 500) + (business.upgradeIncome * 2000); 
}

for( var key in businessesConfig ){
    const business = businessesConfig[key]; 
    const { name, faIcon } = business; 
    
    managersConfig[key] = {
        name: name + " manager",
        description: "Runs your " + name + " business", 
        faIcon: faIcon,
        cost: businessToManagerCost(business),
    }
}

export default managersConfig; 
