import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector, RootStateOrAny } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductOverviewScreen = (props: any) => {
  const products = useSelector(
    (state: RootStateOrAny) => state.products.availableProducts
  );
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate('ProductDetails', {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductOverviewScreen;
