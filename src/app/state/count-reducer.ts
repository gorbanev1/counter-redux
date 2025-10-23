import {createAction, createReducer} from "@reduxjs/toolkit";
import type {StateType} from "../App.tsx";

const initialState:StateType = {
    count: 0,
    maxValue: 1,
    minValue: 0,
    disabledIncrement: false,
    disabledReset: true,
    settingsOn: false
}

export const setCountAC = createAction('SET-COUNT', (count:number)=>{
    return {payload: {count}}
})
export const setMinAC = createAction('SET-MIN',(min:number)=>{
    return {payload: {min}}
})
export const setMaxAC=createAction('SET-MAX', (max:number)=>{
    return {payload: {max}}
})
export const setDisableResetAC=createAction("DISABLE-RESET", (disableReset:boolean)=>{
    return {payload:{disableReset}}
})
export const setDisableIncrementAC = createAction('DISABLE-INCREMENT',(disableIncrement: boolean)=>{
    return {payload:{disableIncrement}}
})
export const setSettingsOnOffAC = createAction('SET-SETTINGS-ON-OFF',(setSettingsOn: boolean)=>{
    return {payload:{setSettingsOn}}
})



export const countReducer = createReducer(initialState, (builder) => {
    builder.addCase(setCountAC, ((state, action) => {

        state.count=action.payload.count
    }))
    builder.addCase(setMaxAC, ((state, action)=>{
        state.maxValue=action.payload.max
    }))
    builder.addCase(setMinAC, ((state, action)=>{
        state.minValue=action.payload.min
    }))
    builder.addCase(setDisableResetAC, ((state,action)=>{
        state.disabledReset=action.payload.disableReset
    }))
    builder.addCase(setDisableIncrementAC, ((state,action)=>{
        state.disabledIncrement=action.payload.disableIncrement
    }))
    builder.addCase(setSettingsOnOffAC,((state, action)=>{
        state.settingsOn=action.payload.setSettingsOn
    }) )
})
