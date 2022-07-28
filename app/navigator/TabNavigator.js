import React, { useEffect } from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FriendsScreen from '../screens/FriendsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import NotificationsScreen from '../screens/NotificationsScreen'
import HomeScreen from '../screens/HomeScreen'
import LogoutScreen from '../screens/LogoutScreen'
import { logoutSession } from '../services/userService'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

export default function TabNavigator({ navigation }) {

  const logout = async (e) => {
    e.preventDefault()
    const data = await logoutSession()
    if (!data.error) {
      navigation.navigate("LoginScreen")
    }
    else {
      console.log("error", data.body)
    }
  }

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    // screenOptions={{}}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{ tabBarLabel: 'Friends' }} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }} />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ tabBarLabel: 'Notifications' }} />

      <Tab.Screen name="logout" component={LogoutScreen}
        options={{ tabBarLabel: 'Home' }} listeners={{ tabPress: e => logout(e) }} />
    </Tab.Navigator>
  )
}
