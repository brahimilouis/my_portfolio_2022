import React from 'react';
import './_portfolio.scss'
import Dropdownlist from "./dropDownList";
import Listcategory from "./listCategory";

export type PortfolioProps = {}

export default function Portfolio({}: PortfolioProps) {
    const listLanguages = [
        {
            name: 'c',
            libelle: 'C',
        },
        {
            name: 'flutter',
            libelle: 'Flutter',
        },
        {
            name: 'vuejs',
            libelle: 'Vue js',
        },
        {
            name: 'phpweb',
            libelle: 'PHP / HTML / CSS / JQUERY / SQL',
        },
        {
            name: 'kotlin',
            libelle: 'Kotlin',
        },
        {
            name: 'haskell',
            libelle: 'Haskell',
        }
    ]
    const listOrigine = [
        {
            name: 'ecole',
            libelle: 'Ecole',
        },
        {
            name: 'entreprise',
            libelle: 'Entreprise',
        },
        {
            name: 'perso',
            libelle: 'Perso',
        },
    ]
    const listType = [
        {
            name: 'mobile',
            libelle: 'Mobile',
        },
        {
            name: 'web',
            libelle: 'Web',
        },
        {
            name: 'jeux',
            libelle: 'Jeux',
        },
        {
            name: 'algo',
            libelle: 'Algorithmie',
        },
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
        },
        {
            title: "Projets par type",
            child: <Listcategory list={listType} name="type"/>,
            isOpenDefault: true
        },
        {
            title: "Projets par origine",
            child: <Listcategory list={listOrigine} name="origine"/>,
            isOpenDefault: true
        }
    ];
    return (<section className="portfolio">
        <h1 className={"titre-section"}>Mes projets</h1>
        {listCategory.map((category, index) => (
            <Dropdownlist
                key={"dropdownlist-"+index}
                title={category.title}
                child={category.child}
                isOpenDefault={category.isOpenDefault}
            />
        ))}
    </section>);
}
