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
    return (<div className="listProjectPopup content-popup">
        <div className={"header"}>
            <div className={"conteneur-close"} onClick={props.close}><CloseIcon/></div>
            <span>{props.listProjectsProps.title}</span>
            <span/>
        </div>
        <div className={"list-project"}>
            <GridCardList>{
                props.listProjectsProps.list.map((projectData) => (
                    <ProjectCard data={projectData}/>
                ))
            }</GridCardList>
        </div>
    </div>);
}
