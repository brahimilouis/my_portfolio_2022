import React, {Dispatch, SetStateAction} from 'react';
import Switchbutton from "./switchButton/switchButton";
import {Link} from "react-scroll";

export type FilterProps = {
    listFilter:Array<{
        color:string,
        libelle:string,
        name:string,
        stateChecked:[boolean, Dispatch<SetStateAction<boolean>>]
    }>
}

export default function Filter(props: FilterProps) {
    return (<div className="filter">
        {props.listFilter.map((filter, index) => (
            <div key={"filter-"+index}>
                <span className="title">{filter.libelle}</span>
                <Switchbutton color={filter.color} stateChecked={filter.stateChecked}/>
            </div>
        ))}

    </div>);
}
