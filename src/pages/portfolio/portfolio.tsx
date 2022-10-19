import React, {useEffect, useState} from 'react';
import './_portfolio.scss'
import Dropdownlist from "../../components/list/dropDownList/dropDownList";
import GridCardList from "../../components/list/gridCardList/gridCardList";
import CategoryCard from "../../components/card/categoryCard/categoryCard";
import ProjectCard from "../../components/card/projectCard/projectCard";
import PortfolioIcon from "../../assets/icons/portfolioIcon";
import ProjectData from "../../class/projectData";
import Categories, {CategoryData, ListCategoryData} from "../../class/categoryData";
// import datas from ;
export type PortfolioProps = {}

export default function Portfolio({}: PortfolioProps) {
    const [categories, setCategories] = useState(new Categories());
    const [loaded, setLoaded] = useState(false);

    async function loadData() {
        await categories.get();
        setLoaded(true)
    }
    if (!loaded) {
        loadData();
    }
    return (<section className="portfolio">
        <div className={"titre-section"}>
            <PortfolioIcon/>
            <span/>
            <h1>Mes projets</h1>
        </div>
        {
            categories.datas.map((listCategory, index) => (
                <Dropdownlist
                    key={"dropdownlist-" + index}
                    title={listCategory.title}
                    isOpenDefault={listCategory.isOpenDefault}>
                    {
                        <GridCardList key={listCategory.type+index}>{
                            listCategory.data.map((category, index) =>
                                {
                                    return listCategory.type == "project" ?
                                        <ProjectCard key={"project-"+index}
                                            path={category.path}
                                            title={category.title}
                                            jsonPath={category.name}
                                        />:
                                        <CategoryCard key={category.name+index}
                                            path={listCategory.type+"/"+category.path}
                                            projectList={categories.getListProjectFiltered(listCategory.type, category.name)}
                                            title={category.title}
                                        />
                                }
                            )
                        }</GridCardList>
                    }
                </Dropdownlist>
            ))
        }
    </section>);
}
