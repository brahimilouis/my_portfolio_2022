import React from 'react';

export type ListProjectProps = {
    name: string
    list: Array<{
        name: string
        libelle: string
        path:string
    }>
}
export default function Listproject(props: ListProjectProps) {
    return (
        <div className="listProjects">
            {
            props.list.map(
                (projet, index) => (
                    <div className="li" key={projet.name + index.toString()}>
                        {/*<ImageAction*/}
                        {/*    path={projet.path}*/}
                        {/*    typeAction={TypePopupAction.projet}*/}
                        {/*/>*/}
                        <h3>{projet.libelle}</h3>
                    </div>
                )
            )
            }
    </div>);
}
