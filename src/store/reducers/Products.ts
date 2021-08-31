import PRODUCTS from "../../data/dummyData"; // set dummy data for initialState //! this will be over written once i incorporate axios :)

// initialState of products reducer
const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === "u1"),
}

export default (state = initialState, action) => {
    return state; // TODO update reducer
}