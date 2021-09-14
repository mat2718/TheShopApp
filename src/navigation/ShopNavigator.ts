import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import ProductOverviewScreen from "../screens/shop/ProductOverview";
import ProductDetailScreen from "../screens/shop/ProductDetails";
import CartScreen from "../screens/shop/Cart";
import Colors from "../constants/colors";
import {Platform} from "react-native";

const ProductsNavigator = createStackNavigator(
    {
        ProductOverview: ProductOverviewScreen,
        ProductDetails: ProductDetailScreen,
        Cart: CartScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === "android" ? Colors.primary : ""
            },
            headerTitleStyle: {
                fontFamily: "open-sans-bold"
            },
            headerBackTitleStyle: {
                fontFamily: "open-sans-regular"
            },
            headerTintColor:
                Platform.OS === "android" ? "white" : Colors.primary
        }
    }
);

export default createAppContainer(ProductsNavigator);
