import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { RootStateOrAny, useSelector } from "react-redux";

const ProductDetailScreen = (props: any) => {

  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state: RootStateOrAny) => {
    state.products.availableProducts.find(prod => prod.id === productId);
  });

  return (
    <View>
      <Text>{props.navigation.getParam("clickedProduct").title}</Text>
    </View>
  );
};

ProductDetailScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
