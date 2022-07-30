import React, { useState, useContext } from 'react';
import UserContext from '../context/user/UserContext';

import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'
import { Button, Input, Image } from '@rneui/base';

export default function LoginScreen({ navigation }) {

  const { loginUser } = useContext(UserContext)
  const [text, onChangeText] = useState();
  const [number, onChangeNumber] = useState(null);

  const onPressLoginButton = async () => {
    const data = await loginUser('arriba@abajo.com', 'arriba')
    if (!data.error) {
      navigation.navigate('Wall')
    }
  }


  return (
    <KeyboardAvoidingView behavior='height' >
      <View style={styles.container}>
        <Text style={styles.title}>
          Recify
        </Text>
        <View style={styles.input}>
          <Input
            onChangeText={onChangeText}
            value={text}
            type='email'
            placeholder='email'
          />
          <Input
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder='password'
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttonStyle}>
          <Button
            onPress={onPressLoginButton}
            title="Login"
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            onPress={() => navigation.navigate('RegisterScreen')}
            title="Register"
            type='outline'
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },
  container: {

    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  input: {
    width: 300
  },
  buttonStyle: {
    marginTop: 20,
    width: 200,
  },


});