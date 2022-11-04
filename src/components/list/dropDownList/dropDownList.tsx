import React, {useState} from 'react';
import './_dropDownList.scss'

export type DropdownlistProps = {
    title: String
    children: React.ReactNode
    isOpenDefault: boolean
}


export default function Dropdownlist(props: DropdownlistProps) {
    const [isOpen, setIsOpen] = useState<boolean>(props.isOpenDefault);
    return (<div className="dropDownList">
        <details open={isOpen}>
            <summary>
                {props.title}
            </summary>
            <div className="content">{props.children}</div>
        </details>
    </div>);
}
