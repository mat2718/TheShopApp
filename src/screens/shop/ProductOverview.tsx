import React from "react";
import {FlatList, Text, Platform} from "react-native";
import {useSelector, RootStateOrAny, useDispatch} from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/Cart";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/ui/HeaderButton";

const ProductOverviewScreen = (props: any) => {
    const products = useSelector(
        (state: RootStateOrAny) => state.products.availableProducts
    );

    const dispatch = useDispatch();

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    product={itemData.item}
                    onViewDetail={() => {
                        props.navigation.navigate({
                            routeName: "ProductDetails",
                            params: {
                                productId: itemData.item.id,
                                productTitle: itemData.item.title,
                                clickedProduct: itemData.item
                            }
                        });
                    }}
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item));
                    }}
                />
            )}
        />
    );
};

ProductOverviewScreen.navigationOptions = (navData: any) => {
    return {
        headerTitle: "All Products",
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Cart"
                    iconName={
                        Platform.OS === "android" ? "md-cart" : "ios-cart"
                    }
                    onPress={() => {
                        navData.navigation.navigate("Cart");
                    }}
                />
            </HeaderButtons>
        )
    };
};

export default ProductOverviewScreen;
