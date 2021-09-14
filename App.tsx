import {StatusBar} from "expo-status-bar"; // installed using expo install rather than npm install
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import productsReducer from "./src/store/reducers/Products";
import cartReducer from "./src/store/reducers/Cart";
import ShopNavigator from "./src/navigation/ShopNavigator";
import AppLoading from "expo-app-loading"; // installed using expo install rather than npm install
import {useFonts} from "expo-font"; // installed using expo install rather than npm install
import {composeWithDevTools} from "redux-devtools-extension"; //! remove prior to deployment

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

//! remove prior to deployment
const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
    // Load my fonts
    let [fontsLoaded] = useFonts({
        "open-sans-regular": require("./src/assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./src/assets/fonts/OpenSans-Bold.ttf")
    });

    // check if my fonts loaded properly
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Provider store={store}>
                <ShopNavigator />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
