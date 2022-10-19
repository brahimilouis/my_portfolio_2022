import React from 'react';
import "./_gridCardList.scss"
export type GridCardListProps = {
    children: React.ReactNode[],
}

export default function GridCardList({children}: GridCardListProps) {
    function centerLeftLastRow() {
        let elem : React.ReactNode[] = []
        if (children.length % 3 === 0 || children.length < 3) {
            // Pas besoin d'ajustement
            return elem;
        }
        for (let i = 0; i < 3 - (children.length % 3); i++) {
            elem.push(<span/>)
        }
        return elem;
    }

    return (<div className="grid-card-list">
        {children}
        {
            centerLeftLastRow()
        }

    </div>);
}
