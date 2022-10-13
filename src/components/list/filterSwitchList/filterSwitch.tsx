import React, {Dispatch, SetStateAction} from 'react';
import Switchbutton from "../../button/switchButton/switchButton";
import './_filterSwitch.scss'
export type ListFilterSwitchProps = {
    listFilter:Array<{
        color:string,
        libelle:string,
        name:string,
        stateChecked:[boolean, Dispatch<SetStateAction<boolean>>]
    }>
}

export default function ListFilterSwitch(props: ListFilterSwitchProps) {
    return (<div className="list-filter-switch">
        {props.listFilter.map((filter, index) => (
            <div key={"filter-"+index}>
                <span className="title">{filter.libelle}</span>
                <Switchbutton color={filter.color} stateChecked={filter.stateChecked}/>
            </div>
        ))}

    </div>);
}
