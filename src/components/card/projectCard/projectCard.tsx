import React from 'react';
import './_projectCard.scss'
import OpenPopupOnClick, {TypePopup} from "../../popup/openPopupOnClick/openPopupOnClick";
import ImageClickable from "../../image/imageClickable/imageClickable";
export type ProjectCardProps = {
    path:String
}

export default function ProjectCard(props: ProjectCardProps) {
    return (<OpenPopupOnClick type={TypePopup.projet}>
        <ImageClickable path={"projects/"+props.path}/>
    </OpenPopupOnClick>);
}
