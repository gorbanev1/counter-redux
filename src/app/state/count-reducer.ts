import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    maxValue: 1,
    minValue: 0,
    disabledIncrement: false,
    disabledReset: true,
    settingsOn: false
}

export const incrementAC = createAction('INCREMENT')



export const countReducer = createReducer(initialState, (builder) => {
    builder.addCase(incrementAC, ((state, action) => {
        state.count=state.count+1
    }))
})
