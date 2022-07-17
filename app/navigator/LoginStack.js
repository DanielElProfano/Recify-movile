import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from "../screens/LoginScreen"
import TabNavigator from "./TabNavigator"


const Stack = createNativeStackNavigator()

export default function LoginStack() {
  return (
    <Stack.Navigator initialRouteName='LoginScreen'

      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Wall"
        component={TabNavigator}
      />
    </Stack.Navigator>
  )
}

