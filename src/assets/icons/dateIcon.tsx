import React from 'react';

export type DateIconProps = {}

export default function DateIcon({}: DateIconProps) {
    return (
        <svg className={"calendar icon"} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <rect width="20" height="18" x="2" y="4" rx="4"/>
                <path d="M8 2v4m8-4v4M2 10h20"/>
            </g>
        </svg>
    );
}
