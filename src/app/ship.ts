export class Ship {
    public "name":string;
    public "nbEngine":number;
    public "nbWing":number;
    public "price":number;
    public "nbPlaces":number;
    public "img":string;
    
    constructor(p_name:string, p_nbEngine:number, p_nbWing:number, p_price:number, p_nbPlaces:number, p_img:string){
        this.name = p_name;
        this.nbEngine = p_nbEngine;
        this.nbWing = p_nbWing;
        this.price = p_price;
        this.nbPlaces = p_nbPlaces;
        this.img = p_img;
    }
}


