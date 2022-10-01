import React, {Component, useState} from 'react';
import './_portfolio.scss'

export type DropdownlistProps= {
    title: String
    child: React.ReactNode
    isOpenDefault : boolean
}


export default function Dropdownlist(props: DropdownlistProps) {
    const [isOpen, setIsOpen] = useState<boolean>(props.isOpenDefault);
    return (<div className="dropDownList">
        <details open={isOpen}>
            <summary>
                {props.title}
            </summary>
            <div className="content">{props.child}</div>
        </details>
    </div>);
}

