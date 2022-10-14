import React from 'react';
import "./_imageCardProject.scss"

export type ImageCardProjectProps = {
    path:string
}

export default function ImageCardProject(props: ImageCardProjectProps) {
    return (<img className={"image-card-project"}
                 src={require(`../../../assets/${props.path}`)}
                 alt="image"
    />);
}
