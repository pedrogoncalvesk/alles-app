import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WalletStackParamList } from './navigation-types';
import Wallet from 'screens/Wallet/Wallet';
import AddBalance from 'screens/Wallet/AddBalance';


const Stack = createNativeStackNavigator<WalletStackParamList>();

const WalletNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Wallet">
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="AddBalance" component={AddBalance} />
    </Stack.Navigator>
  );
};
export default WalletNavigator;
