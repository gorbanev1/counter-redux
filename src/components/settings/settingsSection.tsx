// @flow
import * as React from 'react';
import s from './Settings.module.css'

type Props = {

    error: string|null
    max:number
    start: number,
    setMax: (n: number )=>void
    setStart: (n: number )=>void

};
export const SettingsSection = ({

                                    error,
                                    max,
                                    setMax,
                                    start,
                                    setStart

                                }: Props) => {
    return (
        <div className={s.settings}>
            <label>
                max value:&nbsp;&nbsp;&nbsp;
                <input type={"number"} value={max}
                       min={"0"}
                       style={error ? {backgroundColor: 'red', color: "antiquewhite"} : {}}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                           setMax(Number(event.currentTarget.value))
                       }}/>
            </label>
            <label>
                start value:&nbsp;&nbsp;&nbsp;
                <input type={"number"} value={start}
                       min={"0"}
                       style={error ? {backgroundColor: 'red', color: "antiquewhite"} : {}}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                           setStart(Number(event.currentTarget.value))
                       }}/>
            </label>

        </div>
    );
};