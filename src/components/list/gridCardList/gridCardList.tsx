import React from 'react';
import "./_gridCardList.scss"
export type GridCardListProps = {
    children: React.ReactNode
}

export default function GridCardList({children}: GridCardListProps) {
    return (<div className="grid-card-list">
        {children}
    </div>);
}
