export default class ProjectData {
    title: string
    language: string
    type: string
    origin: string
    path: string

    constructor(title: string, language: string, type: string, origin: string, path: string) {
        this.title = title;
        this.language = language;
        this.type = type;
        this.origin = origin;
        this.path = path;
    }
}
