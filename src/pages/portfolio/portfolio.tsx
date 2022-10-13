import React from 'react';
import './_portfolio.scss'
import Dropdownlist from "../../components/list/dropDownList/dropDownList";
import GridCardList from "../../components/list/gridCardList/gridCardList";
import CategoryCard from "../../components/card/categoryCard/categoryCard";
import ProjectCard from "../../components/card/projectCard/projectCard";
import PortfolioIcon from "../../assets/icons/portfolioIcon";

export type PortfolioProps = {}

export default function Portfolio({}: PortfolioProps) {
    const listProjets = [
        <ProjectCard path={"bsq/bsq.png"}/>,
        <ProjectCard path={"cook/cook.png"}/>,
        <ProjectCard path={"dashboard/dashboard.jpg"}/>,
        <ProjectCard path={"evalExpr/evalExpr.jpg"}/>,
        <ProjectCard path={"imageCompressor/imageCompressor.png"}/>,
        <ProjectCard path={"navy/navy.png"}/>,
        <ProjectCard path={"need4Stek/need4Stek.jpg"}/>,
        <ProjectCard path={"rpg/3.png"}/>,
        <ProjectCard path={"runner/runner.png"}/>,
        <ProjectCard path={"sokoban/sokoban.png"}/>,
    ]
    const listLanguages = [
        <CategoryCard path={"languages/c.jpg"}/>,
        <CategoryCard path={"languages/flutter.jpg"}/>,
        <CategoryCard path={"languages/vuejs.jpg"}/>,
        <CategoryCard path={"languages/phpweb.jpg"}/>,
        <CategoryCard path={"languages/kotlin.jpg"}/>,
        <CategoryCard path={"languages/haskell.jpg"}/>,
    ]
    const listOrigine = [
        <CategoryCard path={"origine/ecole.jpg"}/>,
        <CategoryCard path={"origine/entreprise.jpg"}/>,
        <CategoryCard path={"origine/perso.jpg"}/>,
    ]
    const listType = [
        <CategoryCard path={"type/mobile.jpg"}/>,
        <CategoryCard path={"type/web.jpg"}/>,
        <CategoryCard path={"type/jeux.jpg"}/>,
        <CategoryCard path={"type/algo.jpg"}/>,
    ]

    const listCategory = [
        {
            title: "Tous les projets",
            name: "projet",
            list: listProjets,
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
        <div className={"titre-section"}>
            <PortfolioIcon/>
            <span/>
            <h1>Mes projets</h1>
        </div>
        {listCategory.map((subcategory, index) => (
            <Dropdownlist
                key={"dropdownlist-" + index}
                title={subcategory.title}
                isOpenDefault={subcategory.isOpenDefault}>
                {
                    <GridCardList>{subcategory.list}</GridCardList>
                }
            </Dropdownlist>
        ))}
    </section>);
}
