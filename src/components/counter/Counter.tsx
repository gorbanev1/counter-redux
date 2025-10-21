// @flow
import * as React from 'react';
import {Button} from "../Button/Button.tsx";
import s from './Counter.module.css'
import {FlexWrapper} from "../flexWrapper/FlexWrapper.tsx";
import {useEffect} from "react";
import {SettingsSection} from "../settings/settingsSection.tsx";


type Counter = {
    count: number
    setCount: (count: number) => void
    maxValue?: number
    startValue?: number
    setDisabledIncrement: (v: boolean) => void
    setDisabledReset: (v: boolean) => void
    disabledIncrement: boolean
    disabledReset: boolean
    setMaxCounterValue: (v: number) => void
    settingsOn: boolean
    setSettingsOn: (s: boolean) => void


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
export const Counter = ({
                            count,
                            setCount,
                            setDisabledIncrement,
                            disabledReset,
                            setDisabledReset,
                            disabledIncrement,
                            setMaxCounterValue,
                            settingsOn,
                            setSettingsOn,
                        }: Counter) => {
        const [max, setMax] = React.useState<number>(0);
        const [start, setStart] = React.useState<number>(0);
        const [error, setError] = React.useState<string | null>('');

        useEffect(() => {
            if (start > max - 1) {
                setStart(max - 1)
                if (max === 0) setStart(0)
            }
        }, [start, max])

        useEffect(() => {

            const start = localStorage.getItem("startCount")
            const max = localStorage.getItem("maxCount")
            if (start && max) {
                setStart(JSON.parse(start))
                setMax(JSON.parse(max))
                setCount(JSON.parse(start))
            }
        }, [])
        useEffect(() => {
            if (start && max) {
                setMaxCounterValue(max)
                setCount(start)
            }
        }, [])

        const increment = () => {
            console.log(start, max)
            if (count < max) {
                setCount(count + 1)

            }
            if (count === max - 1) {
                setDisabledIncrement(true)
                setDisabledReset(false)
            }

        }

        function setCount0() {
            setCount(start)
            setDisabledIncrement(false)
            setDisabledReset(true)
        }

        function setValues() {
            setSettingsOn(!settingsOn)
            if (max > start) {
                setMax(max)
                setStart(start)
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
            <div className={s.counter}>
                {settingsOn &&
                    <SettingsSection max={max} setMax={setMax} start={start} setStart={setStart} error={error}/>}
                {!settingsOn && <div className={s.number} style={count == max ? maxStyle : {}}>{count}</div>}
                <FlexWrapper direction={"row"} gap={'20px'} padding={"10px 0"} >
                    {!settingsOn && <Button action={increment} title={'increment'} disabledProp={disabledIncrement}></Button>}
                    {!settingsOn &&  <Button action={setCount0} title={'reset'} disabledProp={disabledReset}></Button>}
                    <Button title={"set"} action={setValues}/>
                </FlexWrapper>

            </div>
        );
    }
;