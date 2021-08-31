interface IProducts {
    id: number;
    ownerId: number; 
    title: string;
    imageUrl: string;
    description: string;
    price: string
}

/**
 * created product model for product overview screen
 */
class Product implements IProducts{
    
    public id: number;
    public ownerId: number; 
    public title: string;
    public imageUrl: string;
    public description: string;
    public price: string;

    constructor(id: number, ownerId: number, title: string, imageUrl: string, description: string, price: string) {
        this.id = id;
        this.ownerId = ownerId;
        this.title = title;
        this.imageUrl = imageUrl
        this.description = description;
        this.price = price;
    }
}
export default Product;