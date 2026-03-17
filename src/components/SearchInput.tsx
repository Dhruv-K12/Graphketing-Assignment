import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { COLORS } from "../const/theme";

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={24} color={COLORS.secondaryColor} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        placeholderTextColor={COLORS.secondaryColor}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: COLORS.backgroundColor,
    borderColor: COLORS.borderColor,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius: 12,
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
});
