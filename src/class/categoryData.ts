import React from "react";
import FetchData from "./fetchData";

export type ProjectCategory = {
    language:string,
    type:string,
    origine:string
}

export class CategoryData {
    title:string
    name:string
    path:string
    projectCategory : ProjectCategory | null

    constructor(title:string, type:string, name:string, path:string, projectCategory:ProjectCategory|null) {
        this.title = title;
        this.path = path;
        this.name = name;
        this.projectCategory = projectCategory;
    }
}

export class ListCategoryData {
    title:string
    data: Array<CategoryData> = []
    isOpenDefault:boolean
    type:string
    constructor(title:string, data:Array<CategoryData>, isOpenDefault:boolean=true, type:string) {
        this.title = title;
        this.isOpenDefault = isOpenDefault;
        this.data = data;
        this.type = type;
    }
}

export default class Categories extends FetchData {
    datas : Array<ListCategoryData> = []
    constructor () {
        super("categories.json");
    }
    public async get() {
        await this.fetchData().then((json) => {
            try {
                this.datas = (<Array<ListCategoryData>>json)
            } catch (e) {
                console.log(e);
            }
        })
    }

    public getListProjectFiltered(listCategoryType:string, categoryName:string) : Array<CategoryData> {
        let list : Array<CategoryData> = [];
        let projectsCategory = this.datas.find(data => {
            return data.type === "project"
        })
        if (typeof projectsCategory != "undefined") {
            projectsCategory.data.map(project => {
                switch (listCategoryType) {
                    case "type":
                        if (project.projectCategory?.type == categoryName)
                            list.push(project)
                        break;
                    case "origine":
                        if (project.projectCategory?.origine == categoryName)
                            list.push(project)
                        break;
                    case "language":
                        if (project.projectCategory?.language == categoryName)
                            list.push(project)
                        break;
                }
            })
        }
        return list;

    }
}
