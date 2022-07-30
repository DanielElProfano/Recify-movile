/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserState from './app/context/user/UserState';
import LoginStack from './app/navigator/LoginStack';

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
