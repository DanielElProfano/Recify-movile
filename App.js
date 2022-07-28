/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Dimensions,
  View,
  Text
} from 'react-native';

import UserState from './app/context/user/UserState';
import LoginStack from './app/navigator/LoginStack';


const Stack = createNativeStackNavigator()

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const App = () => {

  return (
    <UserState>
      <NavigationContainer >
        <LoginStack />
      </NavigationContainer>
    </UserState>
  )
};



export default App;
