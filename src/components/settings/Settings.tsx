// @flow
import * as React from 'react';
import {Button} from "../Button/Button.tsx";
import s from './Settings.module.css'
import {useEffect} from "react";
import { SettingsSection } from './settingsSection.tsx';



type Props = {
    count: number
    setCount: (count: number) => void
    setMaxCounterValue: (max: number) => void
    setStartCounterValue: (start: number) => void
    setDisabledIncrement: (v: boolean)=> void
    setDisabledReset: (v: boolean)=> void
};

export const Settings = ({setDisabledIncrement,setDisabledReset, setCount, setStartCounterValue, setMaxCounterValue}: Props) => {
    const [max, setMax] = React.useState<number>(0);
    const [start, setStart] = React.useState<number>(0);
    const [error, setError] = React.useState<string | null>('');

    useEffect(()=>{
        if(start>max-1) {
            setStart(max-1)
            if (max===0) setStart(0)
        }
    },[start,max])

    useEffect(() => {

        const start = localStorage.getItem("startCount")
        const max = localStorage.getItem("maxCount")
        if (start && max) {
            setStart( JSON.parse(start))
            setMax(JSON.parse(max))
        }
    }, [])

    function setValues() {
        if (max > start) {
            setMaxCounterValue(max)
            setStartCounterValue(start)
            setCount(start)
            setDisabledReset(true)
            setDisabledIncrement(false)
            localStorage.setItem("startCount", JSON.stringify(start))
            localStorage.setItem("maxCount", JSON.stringify(max))
            setError(null)
        } else {
            setError("Максимальное значение меньше стартового")
        }
    }

    return (
        <div>
            <SettingsSection max={max} setMax={setMax} start={start} setStart={setStart} error={error}/>
            <Button title={"set"} action={setValues}/>
        </div>
    );
};