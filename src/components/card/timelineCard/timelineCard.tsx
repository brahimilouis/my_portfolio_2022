import React from 'react';
import './_timelineCard.scss'
import ProjectCard from "../projectCard/projectCard";
import GridCardList from "../../list/gridCardList/gridCardList";

export type TimelineCardProps = {
    color: string,
    title: string,
    body: string,
    date: string
    hidden: boolean
}

export default function TimelineCard(props: TimelineCardProps) {
    return (<div key={"timeline-card"} className={"timeline-card" + (props.hidden ? " unseen" : "")}
                 style={{"--color-": props.color} as React.CSSProperties}>
        <span className="round-time"/>
        <div className="content-body">
            <span className="arrow-left"/>
            <span className="arrow-left-in"/>
            <div className="event-info">
                <h1>{props.title}</h1>
                <span className={"date"}>{props.date}</span>
            </div>
            <div className="body">
                <p dangerouslySetInnerHTML={{__html: props.body}}></p>
                {/*<GridCardList className={"card-timeline"}>*/}
                {/*    <ProjectCard*/}
                {/*                 path={"portfolio/portfolio.jpeg"}*/}
                {/*                 title={"Mon portfolio"}*/}
                {/*                 jsonPath={"portfolio.json"}*/}
                {/*    />*/}
                {/*    <ProjectCard*/}
                {/*                 path={"nysos/nysos.png"}*/}
                {/*                 title={"Nysos - (projet fin d'étude)"}*/}
                {/*                 jsonPath={"nysos.json"}*/}
                {/*    />*/}
                {/*    <ProjectCard*/}
                {/*                 path={"agenda/agenda.png"}*/}
                {/*                 title={"Agenda Neolink"}*/}
                {/*                 jsonPath={"agenda.json"}*/}
                {/*    />*/}
                {/*    <ProjectCard*/}
                {/*                 path={"rpg/rpg.png"}*/}
                {/*                 title={"My RPG"}*/}
                {/*                 jsonPath={"rpg.json"}*/}
                {/*    />*/}
                {/*    <ProjectCard*/}
                {/*        path={"rpg/rpg.png"}*/}
                {/*        title={"My RPG"}*/}
                {/*        jsonPath={"rpg.json"}*/}
                {/*    />*/}
                {/*    <ProjectCard*/}
                {/*        path={"rpg/rpg.png"}*/}
                {/*        title={"My RPG"}*/}
                {/*        jsonPath={"rpg.json"}*/}
                {/*    />*/}
                {/*</GridCardList>*/}
            </div>
        </div>
    </div>);
}
