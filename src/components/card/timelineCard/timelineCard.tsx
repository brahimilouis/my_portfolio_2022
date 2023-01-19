import React from 'react';
import './_timelineCard.scss'
import ProjectCard from "../projectCard/projectCard";
import GridCardList from "../../list/gridCardList/gridCardList";
import {EventModel} from "../../../pages/timeline/timeline";
import {Language} from "../../../index";

export type TimelineCardProps = {
    color: string
    hidden: boolean
    event: EventModel
    displayProjects: boolean
    language:Language
}

function TimelineCard(props: TimelineCardProps) {
    return (<div key={"timeline-card"} className={"timeline-card" + (props.hidden ? " unseen" : "")}
                 style={{"--color-": props.color} as React.CSSProperties}>
        <span className="round-time"/>
        <div className="content-body">
            <span className="arrow-left"/>
            <span className="arrow-left-in"/>
            <div className="event-info">
                <h1>{props.event.title}</h1>
                <span className={"date"}>{props.event.date}</span>
            </div>
            <div className="body-timeline">
                <p dangerouslySetInnerHTML={{__html: props.event.body}}></p>
                {
                    !props.displayProjects || props.event.projects === null ? null :
                        <GridCardList className={"project"}>
                            {props.event.projects.map((project, index) => (
                                <ProjectCard key={"timeline-project-" + project.title}
                                             title={project.title}
                                             path={project.path}
                                             jsonPath={project.json}
                                             language={props.language}
                                />
                            ))}
                        </GridCardList>
                }
            </div>
        </div>
    </div>);
}
export default TimelineCard;