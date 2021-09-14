import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/Cart";
import CartItem from "../../models/CartItem";

const initialState = {
    items: {},
    totalAmount: 0
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product; // pulls in the data from the action
            const prodPrice = addedProduct.price; // grabs price from added product
            const prodTitle = addedProduct.title; // grabs title from added product

            let updatedOrNewCartItem;

            if (state.items[addedProduct.id]) {
                //* already have an item in the cart
                updatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );
            } else {
                //* starting a new cart
                updatedOrNewCartItem = new CartItem(
                    1,
                    prodPrice,
                    prodTitle,
                    prodPrice
                );
            }
            return {
                ...state, // current state
                items: {
                    ...state.items,
                    [addedProduct.id]: updatedOrNewCartItem
                }, // updating state items
                totalAmount: state.totalAmount + prodPrice // updating state totalAmount
            };

        case REMOVE_FROM_CART:
            const selectCartItem = state.items[action.pid];
            const currentQTY = selectCartItem.quantity;
            let updatedCartItems;

            if (currentQTY > 1) {
                //* need to reduce it not erase items
                const updatedCartItem = new CartItem(
                    selectCartItem.quantity - 1,
                    selectCartItem.productPrice,
                    selectCartItem.productTitle,
                    selectCartItem.sum - selectCartItem.productPrice
                );
                //* brings in the current state and then updates the object matching the ProductID (pid)
                //*   with updatedCartItem data
                updatedCartItems = {
                    ...state.items,
                    [action.pid]: updatedCartItem
                };
            } else {
                //* erase items
                updatedCartItems = {...state.items};
                delete updatedCartItems[action.pid];
            }
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectCartItem.productPrice
            };
    }
    return state;
};
