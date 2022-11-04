import React from 'react';
import './_containerPopup.scss'

export type ContainerpopupProps = {
    child: React.ReactNode
}

export default function Containerpopup(props: ContainerpopupProps) {
    return (<div className="containerPopup">
        {props.child}
    </div>);
}
