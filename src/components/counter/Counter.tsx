// @flow
import * as React from 'react';
import {Button} from "../Button/Button.tsx";
import s from './Counter.module.css'
import {FlexWrapper} from "../flexWrapper/FlexWrapper.tsx";
import {useEffect} from "react";
import {SettingsSection} from "../settings/settingsSection.tsx";
import {useDispatch, useSelector} from "react-redux";
import {
    setCountAC,
    setDisableIncrementAC,
    setDisableResetAC,
    setMaxAC,
    setMinAC, setSettingsOnOffAC
} from "../../app/state/count-reducer.ts";
import type {RootState} from "../../app/state/store.ts";
import type {StateType} from "../../app/App.tsx";


type Counter = {
    count?: number
    maxValue?: number
    startValue?: number
    disabledIncrement?: boolean
    disabledReset?: boolean
    settingsOn?: boolean
    setSettingsOn?: (s: boolean) => void


};
const maxStyle = {
    fontWeight: 'bold',
    cursor: 'pointer',
    transform: ' scale(1, 1.1)',
    "--border-thickness": " 4px",
    transition: "0.2s ease-in-out",
    color: 'red',
    fontSize: '250%'
}
export const Counter = () => {
/*
        const [max, setMax] = React.useState<number>(0);
        const [start, setStart] = React.useState<number>(0);
        */

        const [error, setError] = React.useState<string | null>('');

        const dispatch = useDispatch()
        const state = useSelector<RootState, StateType>(state => state.counter)
        let max=state.maxValue
        let start=state.minValue
        const disabledReset=state.disabledReset
        const disabledIncrement=state.disabledIncrement
        const settingsOn=state.settingsOn
        let count = state.count

        useEffect(() => {
            if (start > max - 1) {
                dispatch(setMinAC(max - 1))
                if (max === 0) dispatch(setMinAC(0))
            }
        }, [start, max])

        useEffect(() => {
            if (start && max) {
                dispatch(setMinAC(JSON.parse(start)))
                dispatch(setMaxAC(JSON.parse(max)))
                //dispatch(setMinAC(JSON.parse(start)))
                // dispatch(setMaxAC( JSON.parse(max)))
                dispatch(setCountAC(JSON.parse(start)))
            }
        }, [])
        useEffect(() => {
            if (start && max) {
                dispatch(setMaxAC(max))
                dispatch(setCountAC(start))
            }
        }, [])

        const increment = () => {
            console.log(start, max)
            if (count < max) {
                dispatch(setCountAC(count + 1))

            }
            if (count === max - 1) {
                dispatch(setDisableIncrementAC(true))
                dispatch(setDisableResetAC(false))
            }

        }

        function setCount0() {
            dispatch(setCountAC(start))
            dispatch(setDisableIncrementAC(false))
            dispatch(setDisableResetAC(true))
        }

        function setValues() {
            dispatch(setSettingsOnOffAC(!settingsOn))
            if (max > start) {

                dispatch(setMaxAC(max))
                dispatch(setMinAC(start))
                dispatch(setCountAC(start))
                dispatch(setDisableResetAC(true))
                dispatch(setDisableIncrementAC(false))
                setError(null)

            } else {
                setError("Максимальное значение меньше стартового")
            }
        }
        const setMax=(max)=>{
            dispatch(setMaxAC(max))
        }
        const setStart=(max)=>{
            dispatch(setMinAC(max))
        }
        return (
            <div className={s.counter}>
                {settingsOn &&
                    <SettingsSection max={max} setMax={setMax} start={start} setStart={setStart} error={error}/>}
                {!settingsOn && <div className={s.number} style={count == max ? maxStyle : {}}>{count}</div>}
                <FlexWrapper direction={"row"} gap={'20px'} padding={"10px 0"}>
                    {!settingsOn &&
                        <Button action={increment} title={'increment'} disabledProp={disabledIncrement}></Button>}
                    {!settingsOn && <Button action={setCount0} title={'reset'} disabledProp={disabledReset}></Button>}
                    <Button title={"set"} action={setValues}/>
                </FlexWrapper>

            </div>
        );
    }
;