import React from 'react';
import './_portfolio.scss'
import Dropdownlist from "../../components/list/dropDownList/dropDownList";
import GridCardList from "../../components/list/gridCardList/gridCardList";
import CategoryCard from "../../components/card/categoryCard/categoryCard";

export type PortfolioProps = {}

export default function Portfolio({}: PortfolioProps) {
    // const listLanguages = [
    //     <CategoryCard path={'languages/c.jpg'}/>,
    //     <CategoryCard path={'languages/flutter.jpg'}/>,
    //     <CategoryCard path={'languages/vuejs.jpg'}/>,
    //     <CategoryCard path={'languages/phpweb.jpg'}/>,
    //     <CategoryCard path={'languages/kotlin.jpg'}/>,
    //     <CategoryCard path={'languages/haskell.jpg'}/>,
    // ]
    // const listOrigine = [
    //     <CategoryCard path={'origine/mobile.jpg'}/>,
    //     <CategoryCard path={'origine/ecole.jpg'}/>,
    //     <CategoryCard path={'origine/entreprise.jpg'}/>,
    //     <CategoryCard path={'origine/perso.jpg'}/>,
    // ]
    // const listType = [
    //     <CategoryCard path={'type/mobile.jpg'}/>,
    //     <CategoryCard path={'type/web.jpg'}/>,
    //     <CategoryCard path={'type/jeux.jpg'}/>,
    //     <CategoryCard path={'type/algo.jpg'}/>,
    // ]

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
            name: "languages",
            list: listLanguages,
            isOpenDefault: false
        },
        {
            title: "Projets par language",
            name: "languages",
            list: listLanguages,
            isOpenDefault: true
        },
        {
            title: "Projets par type",
            name: "type",
            list: listType,
            isOpenDefault: true
        },
        {
            title: "Projets par origine",
            name: "origine",
            list: listOrigine,
            isOpenDefault: true
        }
    ];
    return (<section className="portfolio">
        <h1 className={"titre-section"}>Mes projets</h1>
        {listCategory.map((subcategory, index) => (
            <Dropdownlist
                key={"dropdownlist-" + index}
                title={subcategory.title}
                isOpenDefault={subcategory.isOpenDefault}>
                {
                    <GridCardList>
                        {
                            subcategory.list.map(
                                (category, index) => (
                                    <CategoryCard path={subcategory.name + "/" + category.name + ".jpg"}/>)
                            )}
                    </GridCardList>
                }
            </Dropdownlist>
        ))}
    </section>);
}
