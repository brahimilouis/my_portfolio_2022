import React from 'react';
import './_portfolio.scss'
import Dropdownlist from "./dropDownList";
import Listcategory from "./listCategory";

export type PortfolioProps = {}

export default function Portfolio({}: PortfolioProps) {
    const listLanguages = [
        {
            'name': 'c',
            'libelle': 'C',
        },
        {
            'name': 'flutter',
            'libelle': 'Flutter',
        },
        {
            'name': 'vuejs',
            'libelle': 'Vue js',
        },
        {
            'name': 'phpweb',
            'libelle': 'PHP / HTML / CSS / JQUERY / SQL',
        },
        {
            'name': 'kotlin',
            'libelle': 'Kotlin',
        },
        {
            'name': 'haskell',
            'libelle': 'Haskell',
        }
    ]
    const listCategory = [
        {
            title: "Tous les projets",
            child: <Listcategory list={listLanguages} name="languages"/>,
            isOpenDefault: false
        },
        {
            title: "Projets par language",
            child: <Listcategory list={listLanguages} name="languages"/>,
            isOpenDefault: true
        }
    ];
    return (<div className="portfolio">
        {listCategory.map((category) => (
            <Dropdownlist title={category.title} child={category.child} isOpenDefault={category.isOpenDefault}/>
        ))}
    </div>);
}
