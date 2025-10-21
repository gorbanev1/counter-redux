// @flow
import * as React from 'react';
import s from './FlexWrapper.module.css'

type Wrapper = {
    direction?: string
    children:  React.ReactNode
    gap?: string
    border?: string
    padding?: string
};
export const FlexWrapper = ({direction, children, gap="0", border, padding}: Wrapper) => {
    return (
        <div className={direction==="row"?s.flexRow+' '+s.flex:s.flex}
             style={{
                 gap: gap,
                 border: border,
                 padding: padding
        }}>

            {children}
        </div>
    );
};