import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {countReducer} from "./count-reducer.ts";

const rootReducer=combineReducers({
    counter: countReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RooTState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


window.store=store