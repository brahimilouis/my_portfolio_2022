import React from 'react';
import OpenPopupOnClick, {TypePopup} from "../../popup/openPopupOnClick/openPopupOnClick";
import ImageClickable from "../../image/imageClickable/imageClickable";
import ProjectData, {ListProjectData} from "../../../class/projectData";

export type CategoryCardProps = {
    path: string
    title: string
    projectList:Array<ProjectData>
}

export default  function CategoryCard(props: CategoryCardProps) {

    return (
        <OpenPopupOnClick
            type= {TypePopup.listProjet}
            childrenProps= {new ListProjectData(props.title, props.projectList)}
        >
            <ImageClickable path={"categories/"+props.path}/>
        </OpenPopupOnClick>
    );
}
