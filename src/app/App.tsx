import {useState} from 'react'
import './App.css'
import {Counter} from "../components/counter/Counter.tsx";
import {Settings} from "../components/settings/Settings.tsx";
import {FlexWrapper} from "../components/flexWrapper/FlexWrapper.tsx";


function App() {
    const [count, setCount] = useState(0)
    const [maxCounterValue, setMaxCounterValue] = useState<number | undefined>(undefined)
    const [startCounterValue, setStartCounterValue] = useState<number | undefined>(undefined)
    const [disabledIncrement, setDisabledIncrement] = useState<boolean>(false)
    const [disabledReset, setDisabledReset] = useState<boolean>(true)
    const [settingsOn, setSettingsOn] = useState(false)

    return (
        <>
            <FlexWrapper direction='row' gap={"25px"} border={"none"}>
                <Settings count={count} setCount={setCount} setMaxCounterValue={setMaxCounterValue}
                          setStartCounterValue={setStartCounterValue}
                          setDisabledIncrement={setDisabledIncrement}
                          setDisabledReset={setDisabledReset}></Settings>
                <Counter count={count} setCount={setCount}
                         maxValue={maxCounterValue}
                         startValue={startCounterValue}
                         setDisabledIncrement={setDisabledIncrement}
                         setDisabledReset={setDisabledReset}
                         disabledReset={disabledReset}
                         disabledIncrement={disabledIncrement}
                         setMaxCounterValue={setMaxCounterValue}
                         settingsOn={settingsOn}
                         setSettingsOn={setSettingsOn}
                ></Counter>

            </FlexWrapper>

        </>
    )
}

export default App
