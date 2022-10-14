import React from 'react';
import './_portfolio.scss'
import Dropdownlist from "../../components/list/dropDownList/dropDownList";
import GridCardList from "../../components/list/gridCardList/gridCardList";
import CategoryCard from "../../components/card/categoryCard/categoryCard";
import ProjectCard from "../../components/card/projectCard/projectCard";
import PortfolioIcon from "../../assets/icons/portfolioIcon";
import ProjectData from "../../class/projectData";
import CategoryData, {ListCategoryData} from "../../class/categoryData";

export type PortfolioProps = {}

export default function Portfolio({}: PortfolioProps) {
    const allProjects = [
        new ProjectData("My BSQ", "c", "algo", "ecole", "bsq/bsq.png"),
        new ProjectData("My cook", "c", "algo", "ecole", "cook/cook.png"),
        new ProjectData("My dashboard", "vuejs", "algo", "ecole", "dashboard/dashboard.jpg"),
        new ProjectData("Eval expr", "haskell", "algo", "ecole", "evalExpr/evalExpr.jpg"),
        new ProjectData("Image compressor", "haskell", "algo", "ecole", "imageCompressor/imageCompressor.png"),
        new ProjectData("My navy", "c", "algo", "ecole", "navy/navy.png"),
        new ProjectData("My need 4 stek", "c", "algo", "ecole", "need4Stek/need4Stek.jpg"),
        new ProjectData("My RPG", "c", "algo", "ecole", "rpg/3.png"),
        new ProjectData("My runner", "c", "algo", "ecole", "runner/runner.png"),
        new ProjectData("My sokoban", "c", "algo", "ecole", "sokoban/sokoban.png"),
    ]

    function buildListProjectCategory(category: string, val:string) : Array<ProjectData> {
        var listProjetCategory : Array<ProjectData> = [];
        allProjects.map((projectData) => {
            if (projectData.isInCategory(category, val)) {
                listProjetCategory.push(projectData)
            }
        })
        return listProjetCategory;
    }
    function buildListCategory(type: string) : Array<React.ReactNode> {
        var list : Array<React.ReactNode> = [];
        categories.map((category) => {
            if (category.type == type) {
                list.push(<CategoryCard
                    path={type+"/"+category.path}
                    title={category.title}
                    projectList={buildListProjectCategory(category.type, category.name)}
                />)
            }
        })
        return list;
    }
    const listProjets : Array<React.ReactNode> = [];
    allProjects.map((projectData) => (listProjets.push(<ProjectCard data={projectData}/>)))

    const categories = [
        new CategoryData("C", "language", "c", "c.jpg"),
        new CategoryData("Flutter", "language", "flutter", "flutter.jpg"),
        new CategoryData("Vue js", "language", "vuejs", "vuejs.jpg"),
        new CategoryData("PHP web", "language", "phpweb", "phpweb.jpg"),
        new CategoryData("Kotlin", "language", "kotlin", "kotlin.jpg"),
        new CategoryData("Haskell", "language", "haskell", "haskell.jpg"),
        new CategoryData("Ecole", "origine", "ecole", "ecole.jpg"),
        new CategoryData("Entreprise", "origine", "origine", "entreprise.jpg"),
        new CategoryData("Perso", "origine", "perso", "perso.jpg"),
        new CategoryData("Mobile", "type", "mobile", "mobile.jpg"),
        new CategoryData("Web", "type", "web", "web.jpg"),
        new CategoryData("Jeux", "type", "jeux", "jeux.jpg"),
        new CategoryData("Algorithmie", "type", "algo", "algo.jpg"),
    ]

    const listCategory = [
        new ListCategoryData("Tous les projets", listProjets, false),
        new ListCategoryData("Mes projets développés par language", buildListCategory("language")),
        new ListCategoryData("Mes projets développés par type", buildListCategory("type")),
        new ListCategoryData("Mes projets développés par origine", buildListCategory("origine")),
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
