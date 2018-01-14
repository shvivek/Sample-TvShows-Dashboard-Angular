export class Show {
    private id: number;
    private url: string;
    private name: string;
    private type: string;
    private language: string;
    private genres: any[];
    private status: string;
    private runtime: number;
    private premiered: string;
    private officialSite: string;
    private network: any;

    constructor(show) {
        this.id = show.id;
        this.url = show.url;
        this.name = show.name;
        this.type = show.type;
        this.language = show.language;
        this.genres = show.genres;
        this.status = show.status;
        this.runtime = show.runtime;
        this.premiered = show.premiered;
        this.officialSite = show.officialSite;
        this.network = show.network;
    }
}
