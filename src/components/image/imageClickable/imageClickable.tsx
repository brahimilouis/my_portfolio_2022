import React from 'react';
import "./_imageClickable.scss"

export type ImageClickableProps = {
    path: string
}

export default function ImageClickable(props: ImageClickableProps) {
    return (
        <img className={"image-clickable"}
             src={require(`../../../assets/${props.path}`)}
             alt="clickable"
        />
    );
}
