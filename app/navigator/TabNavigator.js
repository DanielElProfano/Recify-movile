import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FriendsScreen from '../screens/FriendsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import NotificationsScreen from '../screens/NotificationsScreen'
import HomeScreen from '../screens/HomeScreen'

// import Wall from '../screens/wall'


const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: "#000",
        activeBackgroundColor: "#feb72b",
        inactiveTintColor: "#FFF",
        inactiveBackgroundColor: '#527318'
      }}
      screenOptions={{
        tabBarStyle: { position: 'absolute' },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Friends" component={FriendsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  )
}
