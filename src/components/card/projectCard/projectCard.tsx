import React from 'react';
import './_projectCard.scss'
import OpenPopupOnClick, {TypePopup} from "../../popup/openPopupOnClick/openPopupOnClick";
import GithubIcon from "../../../assets/icons/githubIcon";
import ImageCardProject from "../../image/imageCardProject/imageCardProject";
import ProjectData from "../../../class/projectData";

export type ProjectCardProps = {
    data : ProjectData
}

export default function ProjectCard({data}: ProjectCardProps) {
    return (<OpenPopupOnClick type={TypePopup.projet} childrenProps={null}>
        <div className={"project-card"}>
            <ImageCardProject path={"projects/"+data.path}/>
            <div className={"title"}>
                <GithubIcon/>
                <h3>{data.title}</h3>
            </div>
        </div>
    </OpenPopupOnClick>);
}
