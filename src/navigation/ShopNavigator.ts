import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import ProductsOverviewScreen from '../screens/shop/ProductOverview'
import ProductOverview from '../screens/shop/ProductOverview';

const productsNavigator = createStackNavigator({
    ProductOverview: ProductsOverviewScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor:
        }
    }
})