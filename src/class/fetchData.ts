import {Language} from "../index";

export default class FetchData {
    path: string
    lang: Language

    constructor(path: string, lang:Language) {
        this.path = path;
        this.lang = lang
    }

    public async fetchData(): Promise<any> {
        let json: any = null;
        await (fetch('data/' + (this.lang === Language.french ? 'fr':'en') + '/' + this.path, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                json = myJson;
            }));
        return json;
    }
}