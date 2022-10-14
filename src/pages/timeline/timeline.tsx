import React, {useState} from 'react';
import './_timeline.scss'
import ListFilterSwitch from "../../components/list/filterSwitchList/filterSwitch";
import TimelineCard from "../../components/card/timelineCard/timelineCard";
import TimelineIcon from "../../assets/icons/timelineIcon";

export type TimelineProps = {}

export default function Timeline({}: TimelineProps) {
    const listFilter = [
        {
            color: '#31A07B',
            libelle: 'Expériences',
            name: 'experience',
            stateChecked: useState(true)
        },
        {
            color: '#7879F1',
            libelle: 'Formation',
            name: 'formation',
            stateChecked: useState(true)
        },
        {
            color: '#D17A22',
            libelle: 'Perso',
            name: 'out',
            stateChecked: useState(true)
        },
        {
            color: '#4C061D',
            libelle: 'Projets',
            name: 'projet',
            stateChecked: useState(false)
        },
    ];
    const listEvent = [
        {
            body: 'Je suis en entreprise',
            name: 'experience',
            indexFilter: -1,
        },
        {
            body: 'Mon experience',
            name: 'formation',
            indexFilter: -1,
        },
        {
            body: 'Ce qui ce passe à coté',
            name: 'out',
            indexFilter: -1,
        },
        {
            body: 'Mes projets perso',
            name: 'projet',
            indexFilter: -1,
        },
    ];
    // set index of filter
    listEvent.map((event) => {
        event.indexFilter = listFilter.findIndex(filter => {
            return filter.name == event.name
        });
    })
    return (<section className="timeline-section">
        <div>
            <div className={"titre-section"}>
                <TimelineIcon/>
                <span/>
                <h1>Mon parcours</h1>
            </div>
            <ListFilterSwitch listFilter={listFilter}/>
            <div className={"content-timeline"}>
                <div className="timeline">
                    <span className="arrow-top"/>
                    {
                        listEvent
                            // get only available event
                            .filter((eventFilter) => {
                                return eventFilter.indexFilter != -1
                            })
                            // display each available event
                            .map((event, index) => (
                                <TimelineCard
                                    key={"event-" + index}
                                    color={listFilter[event.indexFilter].color}
                                    body={event.body}
                                    hidden={!listFilter[event.indexFilter].stateChecked[0]}
                                />
                            ))}
                </div>
            </div>
        </div>
    </section>);
}
