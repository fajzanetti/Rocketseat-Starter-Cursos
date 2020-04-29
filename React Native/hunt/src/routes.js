import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#DA552F',
        },
        headerTintColor: '#fff',
      }}>
        <Stack.Screen name="JS Hunt" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;