import React from 'react';
import OpenPopupOnClick, {TypePopup} from "../../popup/openPopupOnClick/openPopupOnClick";
import ImageClickable from "../../image/imageClickable/imageClickable";
import {CategoryData} from "../../../class/categoryData";

export type CategoryCardProps = {
    path: string
    title: string
    projectList: Array<CategoryData>
}

export default function CategoryCard(props: CategoryCardProps) {
    return (
        <OpenPopupOnClick
            type={TypePopup.listProjet}
            childrenProps={{title: props.title, list: props.projectList}}
        >
            <ImageClickable path={"categories/" + props.path}/>
        </OpenPopupOnClick>
    );
}
