import React, { useState, useContext } from 'react';
import UserContext from '../context/user/UserContext';

import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Button
} from 'react-native'

export default function LoginScreen({ navigation }) {

  const { loginUser } = useContext(UserContext)
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onPressLoginButton = async () => {
    const data = await loginUser("arriba@abajo.com", "arriba")
    console.log("data login", data)
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
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            type='email'
            placeholder='email'
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
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