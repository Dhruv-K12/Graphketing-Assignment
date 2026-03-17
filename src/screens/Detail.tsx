import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../const/theme";
import BackBtn from "../components/BackBtn";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, Fontisto, Ionicons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { routeStackParamList } from "../navigation/StackNavigator";
import DetailSection from "../components/DetailSection";

type prop = {
  route: RouteProp<routeStackParamList, "Detail">;
};
const Detail = ({ route }: prop) => {
  const data = route.params.data;

  return (
    <SafeAreaView style={styles.container}>
      <BackBtn title="User Details" />
      <DetailSection
        icon={<Feather name="user" size={16} color={COLORS.secondaryColor} />}
        text={data?.name}
        label="Name"
      />
      <DetailSection
        icon={<Fontisto name="email" size={16} color={COLORS.secondaryColor} />}
        text={data?.email}
        label="Email"
      />
      <DetailSection
        icon={<Feather name="phone" size={16} color={COLORS.secondaryColor} />}
        text={data?.phone}
        label="Phone"
      />
      <DetailSection
        icon={
          <AntDesign name="global" size={16} color={COLORS.secondaryColor} />
        }
        text={data?.website}
        label="Website"
      />
      <DetailSection
        icon={
          <Ionicons
            name="business-sharp"
            size={16}
            color={COLORS.secondaryColor}
          />
        }
        text={data?.company?.name}
        label="Company Name"
      />
      <DetailSection
        icon={<Feather name="home" size={16} color={COLORS.secondaryColor} />}
        text={`${data?.address?.street}, ${data?.address?.suite}\n${data?.address?.city} - ${data?.address.zipcode} `}
        label="Address"
      />
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
});
