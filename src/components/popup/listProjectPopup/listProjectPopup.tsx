import React from 'react';
import CloseIcon from "../../../assets/icons/closeIcon";
import GridCardList from "../../list/gridCardList/gridCardList";
import "./_listProjectPopup.scss"
import ProjectCard from "../../card/projectCard/projectCard";
import {CategoryData} from "../../../class/categoryData";

export type ListProjectPopupProps = {
    close: () => void,
    listProjectsProps : ListItemData
}

type ListItemData = {
    title: string
    list: Array<CategoryData>
}

export default function ListProjectPopup(props: ListProjectPopupProps) {
    return (<div className="listProjectPopup content-popup">
        <div className={"header"}>
            <div className={"conteneur-close"} onClick={props.close}><CloseIcon/></div>
            <span>{"Projets - " + props.listProjectsProps.title}</span>
            <span/>
        </div>
        <div className={"list-project"}>
            <GridCardList>{
                props.listProjectsProps.list.map((projectData) => (
                    <ProjectCard path={projectData.path} jsonPath={projectData.name} title={projectData.title}/>
                ))
            }</GridCardList>
        </div>
    </div>);
}
