import React from 'react';
import './_timelineCard.scss'
export type TimelineCardProps = {
    color: string,
    title: string,
    body: string,
    date: string
    hidden: boolean
}

export default function TimelineCard(props: TimelineCardProps) {
    return (<div key={"timeline-card"} className={"timeline-card" + (props.hidden ? " unseen": "")} style={{ "--color-": props.color} as React.CSSProperties}>
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
            </div>
        </div>
    </div>);
}
