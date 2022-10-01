import React from 'react';
import Category, {CategoryProps} from "./category";


export type ListcategoryProps = {
    name: string
    list: Array<{
        name: string
        libelle: string
    }>
}

export default function Listcategory(props: ListcategoryProps) {
    return (
        <div className="listCategory">
            {
                props.list.map(
                    (category, index) => (
                        <div className="li" key={category.name + index.toString()}>
                            <Category
                                path={props.name + "/" + category.name + ".jpg"}
                            />
                        </div>
                    )
                )
            }
            <img/>
        </div>);
}
