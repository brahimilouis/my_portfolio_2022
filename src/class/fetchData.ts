export default class FetchData {
    path: string
    lang: string = "fr"

    constructor(path: string,) {
        this.path = path;
    }

    public async fetchData(): Promise<any> {
        let json: any = null;
        await (fetch('data/' + this.lang + '/' + this.path, {
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