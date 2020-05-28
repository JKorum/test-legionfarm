import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Search, Branches } from './screens'
import { RootStackParamList, Screens } from './types/navigation'

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.Search}>
        <Stack.Screen
          name={Screens.Search}
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screens.Branches}
          component={Branches}
          options={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
