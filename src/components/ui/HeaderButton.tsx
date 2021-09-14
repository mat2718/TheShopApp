import React from "react";
import {HeaderButton} from "react-navigation-header-buttons";
import {StyleSheet, View, Platform} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../../constants/colors";
import colors from "../../constants/colors";

const CustomHeaderButton = (props: any) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === "android" ? "white" : Colors.primary}
        />
    );
};

const styles = StyleSheet.create({});

export default CustomHeaderButton;
