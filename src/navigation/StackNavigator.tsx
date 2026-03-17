import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import { userList } from "../types";

export type routeStackParamList = {
  Home: undefined;
  Detail: { data: userList };
};
const Stack = createNativeStackNavigator<routeStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
