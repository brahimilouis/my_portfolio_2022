import React from 'react';
import './_projectCard.scss'
import OpenPopupOnClick, {TypePopup} from "../../popup/openPopupOnClick/openPopupOnClick";
import ImageCardProject from "../../image/imageCardProject/imageCardProject";

export type ProjectCardProps = {
    path: string
    title: string
    jsonPath: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (<OpenPopupOnClick type={TypePopup.projet} childrenProps={"project/" + props.jsonPath}>
        <div className={"project-card"}>
            <ImageCardProject path={"projects/" + props.path}/>
            <div className={"title"}>
                <h3>{props.title}</h3>
            </div>
        </div>
    </OpenPopupOnClick>);
}
