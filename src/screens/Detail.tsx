import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../const/theme";
import BackBtn from "../components/BackBtn";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, Fontisto, Ionicons } from "@expo/vector-icons";

const Detail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackBtn title="User Details" />
      <View style={styles.section}>
        <Feather name="user" size={16} color={COLORS.secondaryColor} />
        <Text style={styles.label}>Name:</Text>
        <Text>Dhruv</Text>
      </View>
      <View style={styles.section}>
        <Fontisto name="email" size={16} color={COLORS.secondaryColor} />
        <Text style={styles.label}>Email:</Text>
        <Text>Dhruv</Text>
      </View>
      <View style={styles.section}>
        <Feather name="phone" size={16} color={COLORS.secondaryColor} />
        <Text style={styles.label}>Phone:</Text>
        <Text>Dhruv</Text>
      </View>
      <View style={styles.section}>
        <AntDesign name="global" size={16} color={COLORS.secondaryColor} />
        <Text style={styles.label}>Website:</Text>
        <Text>Dhruv</Text>
      </View>
      <View style={styles.section}>
        <Ionicons
          name="business-sharp"
          size={16}
          color={COLORS.secondaryColor}
        />
        <Text style={styles.label}>Company Name:</Text>
        <Text>Dhruv</Text>
      </View>
      <View style={styles.section}>
        <Feather name="home" size={16} color={COLORS.secondaryColor} />
        <Text style={styles.label}>Address:</Text>
        <Text>Dhruv</Text>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 2,
  },
  label: {
    fontSize: 18,
    color: COLORS.secondaryColor,
    marginRight: 2,
  },
});
