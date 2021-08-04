import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { SchedulingComplete } from "../screens/SchedulingComplete";
import { Schedule } from "../screens/Schedule";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={"Home"} component={Home} />
      <Screen name={"CarDetails"} component={CarDetails} />
      <Screen name={"Schedule"} component={Schedule} />
      <Screen name={"SchedulingDetails"} component={SchedulingDetails} />
      <Screen name={"SchedulingComplete"} component={SchedulingComplete} />
    </Navigator>
  );
}
