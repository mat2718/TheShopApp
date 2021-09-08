import { ADD_TO_CART } from "../actions/Cart";
import CartItem from '../../models/CartItem'

const initialState = {
    items: {},
    totalAmount: 0,
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART: 
            const addedProduct = action.product; // pulls in the data from the action
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            let updatedOrNewCartItem;

            if (state.items[addedProduct.id]){
                // already have an item in the cart
                updatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice,
                );
                return {
                    ...state,
                    items: {...state.items, [addedProduct.id]: updatedCartItem},
                    totalAmount: state.totalAmount + prodPrice
                }
            }else{
                // starting a new cart
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice)
                return {
                    ...state, 
                    items: { ...state.items, [addedProduct.id]: newCartItem},
                    totalAmount: state.totalAmount + prodPrice
                }
            }
    }
    return state; // TODO update reducer
};