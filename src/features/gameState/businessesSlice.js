import { createSlice } from '@reduxjs/toolkit'

import { combineReducers, compose } from 'redux'

import { configureStore } from '@reduxjs/toolkit'

import businessesConfig, { GetIncome } from './businessesConfig'; 



/*
console.log("stored data"); 
console.log( JSON.parse( localStorage.getItem('state'))); 
console.log( localStorage.getItem('lastTime')); 
*/

function GetCurSeconds(){
    return ( new Date().getTime() / 1000 ).toFixed(0)
}

function GetOfflineIncome(offlineTime, businesses, unlockedManagers){

    var moneyEarned = 0; 

    for(var key in unlockedManagers){

        // case where manager is unlocked before store 
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

window.onbeforeunload = function(){
    localStorage.setItem('state', JSON.stringify( store.getState() ) ); 
    localStorage.setItem('lastTime', GetCurSeconds() ); 
}


const initialState = { 
    money: 100000, 
    businesses : {}, 
    unlockedManagers: {}
}
const storedStateData = JSON.parse( localStorage.getItem('state')); 
const storedLastTime = localStorage.getItem('lastTime'); 

const startState = (storedStateData !== null) ? storedStateData.gameState : initialState;

// calculate offline values 

export const offlineTime = GetCurSeconds() - storedLastTime; 
export const offlineIncome = GetOfflineIncome(offlineTime, startState.businesses, startState.unlockedManagers); 






//const startState = initialState; 

// Manage all unlocked stores 
const gameStateSlice = createSlice({
  name: 'gameState',
  initialState: startState,
  reducers: { // .actions 
    
    // for add and remove money 
    updateMoney(state, action){
        const money = action.payload; 
        state.money += money; 
    },

    unlockManager(state, action){
        const id = action.payload; 
        state.unlockedManagers[id] = true
    }, 

    upgradeBusiness(state, action) {
        const id = action.payload; 
        const { businesses } = state; 

        var business = businesses[id]; 

        if(business === undefined){
            businesses[id] = {
                level: 1
            }            
        }
        else{
            businesses[id].level ++; 
            //console.log(businesses[id].level); 
        }

    },

  }
})


export const { updateMoney, unlockManager, upgradeBusiness } = gameStateSlice.actions; 



export const store = configureStore({
    reducer: combineReducers({
        gameState: gameStateSlice.reducer
    })
  }); 


