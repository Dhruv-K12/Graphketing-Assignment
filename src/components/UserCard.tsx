import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { COLORS } from "../const/theme";

const UserCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.section}>
        <Feather name="user" size={18} color={COLORS.secondaryColor} />
        <Text>Dhruv Kumar</Text>
      </View>
      <View style={styles.section}>
        <MaterialCommunityIcons
          name="email-outline"
          size={18}
          color={COLORS.secondaryColor}
        />
        <Text>Dhruvkumar1129@gmail.com</Text>
      </View>
      <View style={styles.section}>
        <Feather name="phone" size={18} color={COLORS.secondaryColor} />
        <Text>+91 9599344915</Text>
      </View>
      <View style={styles.section}>
        <MaterialIcons
          name="business"
          size={18}
          color={COLORS.secondaryColor}
        />
        <Text>Google</Text>
      </View>
      <View style={styles.navigateBtn}>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          color={COLORS.backgroundColor}
        />
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderColor: COLORS.borderColor,
    borderRadius: 20,
    gap: 8,
    borderWidth: 0.4,
    elevation: 3,
    backgroundColor: COLORS.backgroundColor,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  navigateBtn: {
    backgroundColor: COLORS.color,
    position: "absolute",
    right: 16,
    bottom: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
