import React from "react";

export default class CategoryData {
    title:string
    type:string
    name:string
    path:string

    constructor(title:string, type:string, name:string, path:string) {
        this.title = title;
        this.type = type;
        this.path = path;
        this.name = name;
    }
}

export class ListCategoryData {
    title:string
    list:Array<React.ReactNode>
    isOpenDefault:boolean
    constructor(title:string, list:Array<React.ReactNode>, isOpenDefault:boolean=true) {
        this.title = title;
        this.list = list
        this.isOpenDefault = isOpenDefault;
    }
}
