import React, {useEffect, useState} from 'react';
import './_timeline.scss'
import Switchbutton from "./switchButton/switchButton";
import Filter from "./filter";
export type TimelineProps = {}

export default function Timeline({}: TimelineProps) {
    const listFilter = [
        {
            color:'red',
            libelle:'Expérience',
            name:'experience',
            stateChecked: useState(true)
        },
        {
            color:'blue',
            libelle:'Formation',
            name:'experience',
            stateChecked: useState(true)
        },
        {
            color:'green',
            libelle:'A coté',
            name:'experience',
            stateChecked: useState(true)
        },
        {
            color:'purple',
            libelle:'Projets',
            name:'experience',
            stateChecked: useState(false)
        },
    ];
    const listEvent = [
        {
            body:'Je suis en entreprise',
            name:'experience',
        },
        {
            body:'Mon experience',
            name:'formation',
        },
        {
            body:'Ce qui ce passe à coté',
            name:'out',
        },
        {
            body:'Mes projets perso',
            name:'projet',
        },
    ];
    return (<div className="timeline">
        <Filter listFilter={listFilter}/>
        <div className="content">
            <div className="event">
                <span></span>
                JE TEST
            </div>
            <div className="event">
                JE TEST 2
            </div>
        </div>
    </div>);
}
