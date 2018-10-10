export class Ship {
    public "name":string;
    public "nbEngine":number;
    public "nbWing":number;
    public "price":number;
    public "nbPlaces":number;
    
    constructor(p_name:string, p_nbEngine, p_nbWing, p_price, p_nbPlaces){
        this.name = p_name;
        this.nbEngine = p_nbEngine;
        this.nbWing = p_nbWing;
        this.price = p_price;
        this.nbPlaces = p_nbPlaces;
    }
}


