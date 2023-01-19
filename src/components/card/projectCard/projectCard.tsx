import React from 'react';
import './_projectCard.scss'
import OpenPopupOnClick, {TypePopup} from "../../popup/openPopupOnClick/openPopupOnClick";
import ImageCardProject from "../../image/imageCardProject/imageCardProject";
import {Language} from "../../../index";

export type ProjectCardProps = {
    path: string
    title: string
    jsonPath: string
    language:Language
}

export default function ProjectCard(props: ProjectCardProps) {
    return (<OpenPopupOnClick language={props.language} type={TypePopup.projet} childrenProps={"project/" + props.jsonPath}>
        <div className={"project-card"}>
            <ImageCardProject path={"projects/" + props.path}/>
            <div className={"title"}>
                <h3>{props.title}</h3>
            </div>
        </div>
    </OpenPopupOnClick>);
}
