
//import { FaLemon, FaNewspaper, FaCar, FaPizzaSlice, FaFish, FaHockeyPuck, FaFilm, FaPiggyBank, FaShip } from 'react-icons/fa';
import { faLemon, faNewspaper, faCar, faPizzaSlice, faFish, faHockeyPuck, faFilm, faPiggyBank, faShip } from '@fortawesome/free-solid-svg-icons'

// All unlockable stores and increase behaviors 


// get current upgrade cost for current level 
export function GetUpgradeCost(level, businessConfig){
    const { startIncome, upgradeIncome } = businessConfig; 
    return ((startIncome * 5) + (upgradeIncome * Math.pow(level/4.0, 2)) ).toFixed(2); 
    
}

export function GetIncome(level, businessConfig){
    const { startIncome, upgradeIncome } = businessConfig; 
    return startIncome + (level * upgradeIncome); 
}



export default {

    // UniqueID 
    LemonBusiness: {
        name: "Lemon",
        faIcon: faLemon, 
        startIncome: 1, 
        upgradeIncome: 1, 
        delay: 1,    
    },
    NewsBusiness: {
        name: "Newspaper",
        faIcon: faNewspaper, 
        startIncome: 10, 
        upgradeIncome: 4, 
        delay: 2,
    },
    CarWashBusiness: {
        name: "CarWash",
        faIcon: faCar, 
        startIncome: 25, 
        upgradeIncome: 10, 
        delay: 6,
    },
    PizzaBusiness: {
        name: "Pizza",
        faIcon: faPizzaSlice, 
        startIncome: 60, 
        upgradeIncome: 30, 
        delay: 12,
    },
    ShrimpBusiness: {
        name: "Shrimp",
        faIcon: faFish, 
        startIncome: 2000, 
        upgradeIncome: 200, 
        delay: 156,
    },
    HockeyBusiness: {
        name: "Hockey",
        faIcon: faHockeyPuck, 
        startIncome: 5000, 
        upgradeIncome: 1000, 
        delay: 387,
    },
    MovieBusiness: {
        name: "Movie",
        faIcon: faFilm, 
        startIncome: 10000, 
        upgradeIncome: 2500, 
        delay: 850,
    },
    BankBusiness: {
        name: "Bank",
        faIcon: faPiggyBank, 
        startIncome: 20000, 
        upgradeIncome: 7500, 
        delay: 1800,
    },
    OilBusiness: {
        name: "Oil",
        faIcon: faShip, 
        startIncome: 35000, 
        upgradeIncome: 10000, 
        delay: 3600,
    },


}