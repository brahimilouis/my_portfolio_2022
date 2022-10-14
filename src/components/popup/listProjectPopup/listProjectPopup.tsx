import React from 'react';
import CloseIcon from "../../../assets/icons/closeIcon";
import GridCardList from "../../list/gridCardList/gridCardList";
import "./_listProjectPopup.scss"
import {ListProjectData} from "../../../class/projectData";
import ProjectCard from "../../card/projectCard/projectCard";

export type ListProjectPopupProps = {
    close: () => void
    listProjectsProps : ListProjectData
}

export default function ListProjectPopup(props: ListProjectPopupProps) {
    return (<div className="listProjectPopup">
        <div className={"conteneur-close"} onClick={props.close}><CloseIcon/></div>
        <h3>{props.listProjectsProps.title}</h3>
        <GridCardList>{
            props.listProjectsProps.list.map((projectData) => (
                <ProjectCard data={projectData}/>
            ))
        }</GridCardList>
    </div>);
}
