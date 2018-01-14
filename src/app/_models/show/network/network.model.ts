export class Network {
    public id: number;
    public name: string;
    public country: any;

    constructor(Network) {
        this.id = Network.id;
        this.name = Network.name;
        this.country = Network.Country;
    }
}
