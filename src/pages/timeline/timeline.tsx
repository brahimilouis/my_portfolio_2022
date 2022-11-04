import React, {useState} from 'react';
import './_timeline.scss'
import ListFilterSwitch from "../../components/list/filterSwitchList/filterSwitch";
import TimelineCard from "../../components/card/timelineCard/timelineCard";
import TimelineIcon from "../../assets/icons/timelineIcon";
import FetchData from "../../class/fetchData";

export type TimelineProps = {}

export type FilterModel = {
    experience: string,
    formation: string,
    other: string,
    project: string
}

type EventProjects = {
    title: string,
    json: string,
    path: string
}

export type EventModel = {
    title: string
    date: string
    body: string,
    type: string
    projects: Array<EventProjects>
}

type TimelineModel = {
    title: string
    filters: FilterModel
    events: Array<EventModel>
}
export default function Timeline({}: TimelineProps) {
    const [datas, setDatas] = useState<null | TimelineModel>(null);
    if (datas == null) {
        new FetchData("timeline.json").fetchData().then((json) => {
            setDatas(json)
        })
    }
    const listFilter = [
        {
            color: '#31A07B',
            name: 'experience',
            stateChecked: useState(true),
            libelle: datas == null ? "" : datas.filters.experience
        },
        {
            color: '#7879F1',
            name: 'formation',
            stateChecked: useState(true),
            libelle: datas == null ? "" : datas.filters.formation

        },
        {
            color: '#D17A22',
            name: 'other',
            stateChecked: useState(true),
            libelle: datas == null ? "" : datas.filters.other

        },
        {
            color: '#4C061D',
            name: 'project',
            stateChecked: useState(false),
            libelle: datas == null ? "" : datas.filters.project
        },
    ];
    return (<section className="timeline-section"> {
        datas == null ? null :
            <div className={"container-timeline-section"}>
                <div className={"titre-section"}>
                    <TimelineIcon/>
                    <span/>
                    <h1>{datas.title}</h1>
                </div>
                <ListFilterSwitch listFilter={listFilter}/>
                <div className={"content-timeline"} key={"ok"}>
                    <div className="timeline">
                        <span className="arrow-top"/>
                        {
                            datas.events
                                .map((event, index) => {
                                    let itemFilter = listFilter.find((item) => (item.name == event.type))
                                    return (typeof itemFilter === "undefined")
                                        ? null
                                        : <TimelineCard
                                            key={"event-card-" + index}
                                            color={itemFilter.color}
                                            event={event}
                                            hidden={!itemFilter.stateChecked[0]}
                                            displayProjects={listFilter[3].stateChecked[0]}
                                        />
                                })
                        }
                    </div>
                </div>

            </div>
    }
    </section>);
}
