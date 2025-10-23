import {useState} from 'react'
import './App.css'
import {Counter} from "../components/counter/Counter.tsx";
import {Settings} from "../components/settings/Settings.tsx";
import {FlexWrapper} from "../components/flexWrapper/FlexWrapper.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "./state/store.ts";

export type StateType = {
    count: number,
    maxValue: number,
    minValue: number,
    disabledIncrement: boolean,
    disabledReset: boolean,
    settingsOn: boolean
}

function App() {
    const [count, setCount] = useState(0)
    const [maxCounterValue, setMaxCounterValue] = useState<number | undefined>(undefined)
    const [startCounterValue, setStartCounterValue] = useState<number | undefined>(undefined)
    const [disabledIncrement, setDisabledIncrement] = useState<boolean>(false)
    const [disabledReset, setDisabledReset] = useState<boolean>(true)
    const [settingsOn, setSettingsOn] = useState(false)
    const state = useSelector<RootState, StateType> (state=>state.counter)

    return (
        <>
            <FlexWrapper direction='row' gap={"25px"} border={"none"}>
{/*                {false&&<Settings count={count}
                          setCount={setCount}
                          setMaxCounterValue={setMaxCounterValue}
                          setStartCounterValue={setStartCounterValue}
                          setDisabledIncrement={setDisabledIncrement}
                          setDisabledReset={setDisabledReset}
                />}*/}
                <Counter/>

            </FlexWrapper>

        </>
    )
}

export default App
