import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { COLORS } from "../const/theme";
import { userList } from "../types";
import { useNavigation } from "@react-navigation/native";
import { routeStackParamList } from "../navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type props = {
  data: userList;
};
type navigationType = NativeStackNavigationProp<routeStackParamList, "Home">;

const UserCard = ({ data }: props) => {
  const navigation = useNavigation<navigationType>();
  const navigateToDetail = () => navigation.navigate("Detail", { data });
  return (
    <TouchableOpacity onPress={navigateToDetail} style={styles.container}>
      <View style={styles.section}>
        <Feather name="user" size={18} color={COLORS.secondaryColor} />
        <Text>{data?.name}</Text>
      </View>
      <View style={styles.section}>
        <MaterialCommunityIcons
          name="email-outline"
          size={18}
          color={COLORS.secondaryColor}
        />
        <Text>{data?.email}</Text>
      </View>
      <View style={styles.section}>
        <Feather name="phone" size={18} color={COLORS.secondaryColor} />
        <Text>{data.phone}</Text>
      </View>
      <View style={styles.section}>
        <MaterialIcons
          name="business"
          size={18}
          color={COLORS.secondaryColor}
        />
        <Text>{data?.company?.name}</Text>
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
    marginBottom: 12,
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
