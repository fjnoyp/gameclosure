import { createSlice } from '@reduxjs/toolkit'

import { combineReducers } from 'redux'

import { configureStore } from '@reduxjs/toolkit'

import { startState } from './globalStateStorageManager'; 



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


