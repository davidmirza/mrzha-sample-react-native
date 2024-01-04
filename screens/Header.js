import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.viewTop}>
      <Pressable style={styles.pressTop}>
        <Feather name="search" style={styles.icnSearch} />
        <TextInput placeholder="Search" />
      </Pressable>
      <AntDesign name="shoppingcart" style={styles.icnCart} />
      <Ionicons name="chatbox-ellipses-outline" style={styles.icnCart} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  icnSearch: {
    paddingLeft: 5,
    fontSize: 22,
    color: "darkgray",
  },

  viewTop: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#05fa63",
  },
  pressTop: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 5,
    height: 40,
    flex: 1,
  },
  icnCart: {
    marginLeft: 5,
    marginRight: 5,
    color: "white",
    fontSize: 23,
  },
});
