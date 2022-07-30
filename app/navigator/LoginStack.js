import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import TabNavigator from "./TabNavigator"


const Stack = createNativeStackNavigator()

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2C6BED' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white'
}

export default function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName='LoginScreen'

      screenOptions={
        globalScreenOptions
      }>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Wall"
        component={TabNavigator}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />
    </Stack.Navigator >
  )
}

