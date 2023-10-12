import * as React from "react";
import { View } from "react-native";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@ui-kitten/components";
import { RootStackParamList } from "./navigation-types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./RootNavigation";
import Home from "screens/Home";
import WalletNavigator from "./WalletNavigator";

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContainer = () => {
  const themes = useTheme();

  return (
    <NavigationContainer ref={navigationRef}>
      <View
        style={{ backgroundColor: themes["background-basic-color-1"], flex: 1 }}
      >
        <Stack.Navigator
          initialRouteName={"Home"}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Wallet" component={WalletNavigator} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default AppContainer;
