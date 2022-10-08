import React from 'react';

export type EventProps = {
    color: string,
    body: string,
    hidden: boolean
}

export default function Event(props: EventProps) {
    return (<div className={"event" + (props.hidden ? " hidde": "")} style={{ "--color-": props.color} as React.CSSProperties}>
        <span className="round-time"/>
        <div className="content-body">
            <span className="arrow-left"/>
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
