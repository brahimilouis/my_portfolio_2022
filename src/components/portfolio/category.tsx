import React from 'react';

export type CategoryProps = {
    path:string
}

export default function Category(props: CategoryProps) {
    return (<img src={require(`./../../assets/categories/${props.path}`)}
             alt="image"/>);
}
