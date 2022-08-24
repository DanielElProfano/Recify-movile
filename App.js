/**
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserState from './app/context/user/UserState';
import LoginStack from './app/navigator/LoginStack';
import PostState from './app/context/post/PostState';

const App = () => {
  console.log("COntext", useContext(PostState))

  return (
    <NavigationContainer>
      <UserState>
        <LoginStack />
      </UserState>
    </NavigationContainer>
  )
};

export default App;
