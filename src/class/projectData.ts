export default class ProjectData {
    title: string
    language: string
    type: string
    origine: string
    path: string

    constructor(title: string, language: string, type: string, origine: string, path: string) {
        this.title = title;
        this.language = language;
        this.type = type;
        this.origine = origine;
        this.path = path;
    }

    public isInCategory(category: string, val: string): boolean {
        let inCategory = false;
        switch (category) {
            case 'language':
                inCategory = this.language == val
                break;
            case 'type':
                inCategory = this.type == val
                break;
            case 'origine':
                inCategory = this.origine == val
                break;
        }
        return inCategory
    }
}
