
// Custom Imports
import businessesConfig, { GetIncome } from '../../config/businessesConfig'; 

import { store } from './globalStateManager'; 


// Manage storage and retrieval of Redux Global State between app open/close via 'localStorage' object 
// This code will need to be reworked to support cross platform (web + native) due to reliance on 'localStorage' 


// ===== ON APP OPEN =====
// Reload stored data 

const initialState = { 
    money: 10000, 
    businesses : GetInitialBusinessesState(), 
    unlockedManagers: {}
}
const storedStateData = JSON.parse( localStorage.getItem('state')); 
const storedLastTime = localStorage.getItem('lastTime'); 

export const startState = (storedStateData !== null) ? storedStateData.gameState : initialState;

export const offlineTime = (storedLastTime !== undefined) ? GetCurSeconds() - storedLastTime : 0; 
export const offlineIncome = (storedLastTime !== undefined) ? GetOfflineIncome(offlineTime, startState.businesses, startState.unlockedManagers) : 0; 


// ===== ON APP CLOSED =====
// Store Redux Global State 

window.onbeforeunload = function(){
    localStorage.setItem('state', JSON.stringify( store.getState() ) ); 
    localStorage.setItem('lastTime', GetCurSeconds() ); 
}



// ===== HELPER FUNCTIONS ===== 
function GetCurSeconds(){
    return ( new Date().getTime() / 1000 ).toFixed(0)
}

function GetOfflineIncome(offlineTime, businesses, unlockedManagers){
    var moneyEarned = 0; 

    for(var key in unlockedManagers){

        // Case where manager is unlocked before store 
        if(businesses[key] !== undefined){
            const businessConfig = businessesConfig[key]; 
            const level = businesses[key].level; 
            

            const delay = businessConfig.delay; 
            const income = GetIncome(level, businessConfig);

            const iterations = (offlineTime / delay).toFixed(0); 

            if(iterations > 0){
                moneyEarned += (income * iterations); 
            }
        }
    }

    return moneyEarned; 
}

function GetInitialBusinessesState(){

    var initialBusinesses = {}; 

    for(var key in businessesConfig){
        initialBusinesses[key] = {
            level: 0
        }
    }

    return initialBusinesses; 
}