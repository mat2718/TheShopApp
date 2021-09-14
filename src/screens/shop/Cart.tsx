import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import CartItem from "../../components/shop/CartItem";
import * as cartActions from "../../store/actions/Cart";

const CartScreen = (props: any) => {
    const cartTotalAmount = useSelector(
        (state: RootStateOrAny) => state.cart.totalAmount,
    );
    const dispatch = useDispatch();

    const cartItems = useSelector((state: RootStateOrAny) => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
            });
        }
        return transformedCartItems.sort((a, b) =>
            a.productId > b.productId ? 1 : -1,
        );
    });

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total:{" "}
                    <Text style={styles.amount}>
                        ${cartTotalAmount.toFixed(2)}
                    </Text>
                </Text>
                <Button
                    title="Order Now"
                    color={Colors.accent}
                    disabled={cartItems.length === 0}
                    onPress={() => {}} // TODO: create order screen
                />
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => (
                    <CartItem
                        quantity={itemData.item.quantity}
                        title={itemData.item.productTitle}
                        amount={itemData.item.sum}
                        onRemove={() => {
                            dispatch(
                                cartActions.removeFromCart(
                                    itemData.item.productId,
                                ),
                            );
                        }}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    summary: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        padding: 10,
    },
    summaryText: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
    },
    amount: {
        color: Colors.primary,
    },
});

export default CartScreen;
