import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="inbox" size={64} color="#999" />
      <Text style={styles.title}>No Items Found</Text>
      <Text style={styles.description}>
        There’s nothing to show here yet.
        {"\n"}Try adding something or check back later.
      </Text>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 20,
  },
});
