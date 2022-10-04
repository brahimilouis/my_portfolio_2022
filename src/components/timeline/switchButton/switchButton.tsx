import React, {Dispatch, SetStateAction} from 'react';
import "./_switchButton.scss"
export type SwitchbuttonProps = {
    color:string
    stateChecked:[boolean, Dispatch<SetStateAction<boolean>>]
}

export default function Switchbutton(props: SwitchbuttonProps) {
    return (<label className="switchButton" style={{ "--color-": props.color } as React.CSSProperties}>
        <input onChange={(e) => props.stateChecked[1](e.target.checked)} type="checkbox" defaultChecked={props.stateChecked[0]}/>
        <span/>
    </label>);
}
