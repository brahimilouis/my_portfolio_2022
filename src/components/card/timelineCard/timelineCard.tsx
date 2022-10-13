import React from 'react';
import './_timelineCard.scss'
export type TimelineCardProps = {
    color: string,
    body: string,
    hidden: boolean
}

export default function TimelineCard(props: TimelineCardProps) {
    return (<div className={"timeline-card" + (props.hidden ? " unseen": "")} style={{ "--color-": props.color} as React.CSSProperties}>
        <span className="round-time"/>
        <div className="content-body">
            <span className="arrow-left"/>
            <span className="arrow-left-in"/>
            <div className="event-info">
                <h1>C'est le titre ça</h1>
                <span>25/03/1999</span>
            </div>
            <div className="body">
                {props.body}
            </div>
        </div>
    </div>);
}
