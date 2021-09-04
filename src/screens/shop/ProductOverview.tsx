import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector, RootStateOrAny } from "react-redux";

const ProductOverviewScreen = () => {
  const products = useSelector(
    (state: RootStateOrAny) => state.products.availableProducts
  );
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

export default ProductOverviewScreen;
