import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../const/theme";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={COLORS.color} size={48} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
