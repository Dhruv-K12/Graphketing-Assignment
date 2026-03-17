import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../const/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type prop = {
  title: string;
};
const BackBtn = ({ title }: prop) => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.btn}>
        <Ionicons
          name="chevron-back-outline"
          size={28}
          color={COLORS.backgroundColor}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: COLORS.color,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    zIndex: -999,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
