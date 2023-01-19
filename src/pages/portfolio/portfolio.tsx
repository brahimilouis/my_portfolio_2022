import React, {useEffect, useState} from 'react';
import './_portfolio.scss'
import Dropdownlist from "../../components/list/dropDownList/dropDownList";
import GridCardList from "../../components/list/gridCardList/gridCardList";
import CategoryCard from "../../components/card/categoryCard/categoryCard";
import ProjectCard from "../../components/card/projectCard/projectCard";
import PortfolioIcon from "../../assets/icons/portfolioIcon";
import PortfolioModel from "../../class/categoryData";
import {Language} from "../../index";

export type PortfolioProps = {
    language:Language
}

export default function Portfolio({language}: PortfolioProps) {
    const [portfolioModel, setPortfolioModel] = useState(new PortfolioModel(language));
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        return () => {setLoaded(false);};
    }, [language]);

    async function loadData() {
        portfolioModel.lang = language;
        await portfolioModel.get();
        setLoaded(true)
    }

    if (!loaded) {
        loadData();
    }
    return (<section className="portfolio">
        <div className={"titre-section"}>
            <PortfolioIcon/>
            <span/>
            <h1>{portfolioModel.title}</h1>
        </div>
        {
            portfolioModel.datas.map((listCategory, index) => (
                <Dropdownlist
                    key={"dropdownlist-" + index}
                    title={listCategory.title}
                    isOpenDefault={listCategory.isOpenDefault}>
                    {
                        <GridCardList key={listCategory.type + index} className={listCategory.type}>{
                            listCategory.data.map((category, index) => {
                                    return listCategory.type == "project" ?
                                        <ProjectCard key={"project-" + index}
                                                     path={category.path}
                                                     title={category.title}
                                                     jsonPath={category.name}
                                                     language={language}
                                        /> :
                                        <CategoryCard key={category.name + index}
                                                      path={listCategory.type + "/" + category.path}
                                                      projectList={portfolioModel.getListProjectFiltered(listCategory.type, category.name)}
                                                      title={category.title}
                                                      language={language}
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
