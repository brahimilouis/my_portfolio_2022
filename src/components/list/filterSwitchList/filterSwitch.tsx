import React, {Dispatch, SetStateAction} from 'react';
import Switchbutton from "../../button/switchButton/switchButton";
import './_filterSwitch.scss'

export type ListFilter =
    Array<{
        name: string
        libelle: string,
        color: string,
        stateChecked: [boolean, Dispatch<SetStateAction<boolean>>]
    }>
export type ListFilterSwitchProps = {
    listFilter: ListFilter
}

export default function ListFilterSwitch(props: ListFilterSwitchProps) {
    return (<div className="list-filter-switch">
        {props.listFilter.map((item, index) => (
            <div key={"filter-" + index}>
                <span className="title">{item.libelle}</span>
                <Switchbutton color={item.color} stateChecked={item.stateChecked}/>
            </div>
        ))}

    </div>);
}
