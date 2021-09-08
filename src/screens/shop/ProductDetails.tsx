import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/colors"
import * as cartActions from '../../store/actions/Cart'

const ProductDetailScreen = (props: any) => {

  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector(
    (state: RootStateOrAny) => state.products.availableProducts.find((prod: any) => prod.id === productId)
  );
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
      <View style={styles.actions}>
      <Button color={Colors.primary} title="Add To Cart" onPress={() => {
        dispatch(cartActions.addToCart(selectedProduct)
      }}/>
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "open-sans-bold"
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "open-sans-regular"
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default ProductDetailScreen;
