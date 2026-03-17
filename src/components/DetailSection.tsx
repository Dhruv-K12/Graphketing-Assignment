import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../const/theme";

type props = {
  text: string;
  icon: React.ReactNode;
  label: string;
};

const DetailSection = ({ text, icon, label }: props) => {
  return (
    <View style={styles.section}>
      <View style={styles.label}>
        {icon}
        <Text style={styles.labelText}>{label}:</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default DetailSection;

const styles = StyleSheet.create({
  section: {
    marginBottom: 12,
    gap: 2,
  },
  label: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  labelText: {
    fontSize: 18,
    color: COLORS.secondaryColor,
  },
  text: {
    fontSize: 22,
  },
});
