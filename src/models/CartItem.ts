interface ICartItem {
    quantity: number;
    productPrice: number;
    productTitle: string;
    sum: number;
}

/**
 * created product model for product overview screen
 */
class CartItem implements ICartItem{
    
    public quantity: number;
    public productPrice: number;
    public productTitle: string;
    public sum: number;

    constructor( quantity: number, productPrice: number, productTitle: string, sum: number ) {
        this.quantity = quantity;
        this.productPrice = productPrice;
        this.productTitle = productTitle;
        this.sum = sum;
    }
}
export default CartItem;