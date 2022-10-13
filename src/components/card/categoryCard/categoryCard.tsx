import React from 'react';
import './_categoryCard.scss'
import OpenPopupOnClick, {TypePopup} from "../../popup/openPopupOnClick/openPopupOnClick";
import ImageClickable from "../../image/imageClickable/imageClickable";
import * as path from "path";

export type CategoryCardProps = {
    path: string
}

export default function CategoryCard(props: CategoryCardProps) {
    return (<OpenPopupOnClick type={TypePopup.listProjet}>
       <ImageClickable path={"categories/"+props.path}/>
    </OpenPopupOnClick>);
}
