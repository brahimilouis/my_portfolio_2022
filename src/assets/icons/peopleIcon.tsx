import React from 'react';

export type PeopleIconProps = {}

export default function PeopleIcon({}: PeopleIconProps) {
    return (<svg className={"people icon"}
        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="7" r="5"/>
            <path strokeLinejoin="round" d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"/>
        </g>
    </svg>);
}
