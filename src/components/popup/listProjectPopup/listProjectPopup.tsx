import React from 'react';
import CloseIcon from "../../../assets/icons/closeIcon";
import GridCardList from "../../list/gridCardList/gridCardList";
import "./_listProjectPopup.scss"
import ProjectCard from "../../card/projectCard/projectCard";
import {CategoryData} from "../../../class/categoryData";
import {Language} from "../../../index";

export type ListProjectPopupProps = {
    close: () => void,
    listProjectsProps: ListItemData
    language: Language
}

type ListItemData = {
    title: string
    list: Array<CategoryData>
}

export default function ListProjectPopup(props: ListProjectPopupProps) {
    return (<div className="listProjectPopup content-popup">
        <div className={"header"}>
            <div className={"content-header"}>
                <div className={"conteneur-close"} onClick={props.close}><CloseIcon/></div>
                <span>{(props.language === Language.french ? "Projets" : "Projects")
                    + " - " + props.listProjectsProps.title}</span>
                <span/>
            </div>
        </div>
        <div className={"list-project"}>
            <GridCardList className={"project"}>{
                props.listProjectsProps.list.map((projectData, key) => (
                    <ProjectCard key={"project-card" + key} path={projectData.path} jsonPath={projectData.name}
                                 title={projectData.title}
                                 language={props.language}
                    />
                ))
            }</GridCardList>
        </div>
    </div>);
}
