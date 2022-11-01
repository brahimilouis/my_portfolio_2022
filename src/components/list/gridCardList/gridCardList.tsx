import React from 'react';
import "./_gridCardList.scss"
export type GridCardListProps = {
    children: React.ReactNode[],
    className:string
}

export default function GridCardList({children, className}: GridCardListProps) {
    return (<div className={"grid-card-list "+ className+"-grid"}>{children}</div>);
}
