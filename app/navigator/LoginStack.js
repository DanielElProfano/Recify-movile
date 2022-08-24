import React from "react"
import { StyleSheet } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import TabNavigator from "./TabNavigator"


const Stack = createNativeStackNavigator()


// crear un useEfect para comprobar si hay un token y si lo hay ir directamente al Wall
// si no está vamos a la pantalla de login.

export default function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName='LoginScreen'
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        style={styles.screen}
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

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    alignItems: 'center'

  }
})

