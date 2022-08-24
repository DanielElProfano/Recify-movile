import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import FriendsScreen from '../screens/FriendsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import NotificationsScreen from '../screens/NotificationsScreen'
import LogoutScreen from '../screens/LogoutScreen'
import { logoutSession } from '../services/userService'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { UsersIcon, LogoutIcon, BellIcon, HomeIcon } from 'react-native-heroicons/outline/index'
import PostState from '../context/post/PostState'

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
  console.log()

  return (

    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#7B3BCA' },
        tabBarIndicatorStyle:
        {
          backgroundColor: '#7B3BCA',
          height: '100%',
          width: '20%',
          borderRadius: 50,
          position: 'relative',
          top: 5
        },
        tabBarPressColor: 'transparent'
      }}
    >
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <UsersIcon color={color} size={26} />
          ),
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#eae020'

        }} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <BellIcon color={color} size={26} />
          ),
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#eae020'
        }} />
      <Tab.Screen
        name="Home"
        style={styles.container}
        component={PostState}
        options={{
          tabBarIcon: ({ size, color }) => (
            <HomeIcon color={color} size={26} />
          ),
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#eae020'
        }} />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <BellIcon color={color} size={26} />
          ),
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#eae020',

        }} />
      <Tab.Screen name="logout" component={LogoutScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <LogoutIcon color='#FFFFFF' size={26} />
          ),
        }}
        listeners={{ tabPress: e => logout(e) }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 100
  }

})
