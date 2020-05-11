
// Custom Imports 
import Juice from './images/Juice.png';
import Cafe from './images/Cafe.png';
import Restaurant from './images/Restaurant.png';
import Fashion from './images/Fashion.png';
import Travel from './images/Travel.png';
import Bank from './images/Bank.png';
import Cinema from './images/Cinema.png';
import App from './images/App.png';
import Oil from './images/Oil.png';


// Get current upgrade cost for current business level 
export function GetUpgradeCost(level, businessConfig){
    const { startIncome, upgradeIncome } = businessConfig; 
    return ((startIncome * 5) + (upgradeIncome * Math.pow(level/4.0, 2)) ); 
    
}

// Get current level for current business level 
export function GetIncome(level, businessConfig){
    const { startIncome, upgradeIncome } = businessConfig; 
    return startIncome + (level * upgradeIncome); 
}


// Below is the config for all businesses + properties 
export default {

    JuiceBusiness: {
        name: "JuiceStand",
        icon: Juice, 
        startIncome: 1, 
        upgradeIncome: 1, 
        delay: 2,    
    },
    CafeBusiness: {
        name: "Cafe",
        icon: Cafe, 
        startIncome: 10, 
        upgradeIncome: 4, 
        delay: 4,
    },
    RestaurantBusiness: {
        name: "Restaurant",
        icon: Restaurant, 
        startIncome: 25, 
        upgradeIncome: 10, 
        delay: 6,
    },
    FashionBusiness: {
        name: "FashionStore",
        icon: Fashion, 
        startIncome: 60, 
        upgradeIncome: 30, 
        delay: 12,
    },
    TravelBusiness: {
        name: "TravelAgency",
        icon: Travel, 
        startIncome: 2000, 
        upgradeIncome: 200, 
        delay: 156,
    },
    BankBusiness: {
        name: "Bank",
        icon: Bank, 
        startIncome: 5000, 
        upgradeIncome: 1000, 
        delay: 387,
    },
    MovieBusiness: {
        name: "MovieStudio",
        icon: Cinema, 
        startIncome: 10000, 
        upgradeIncome: 2500, 
        delay: 850,
    },
    AppBusiness: {
        name: "HitApp",
        icon: App, 
        startIncome: 20000, 
        upgradeIncome: 7500, 
        delay: 1800,
    },
    OilBusiness: {
        name: "OilCompany",
        icon: Oil, 
        startIncome: 35000, 
        upgradeIncome: 10000, 
        delay: 3600,
    },


}