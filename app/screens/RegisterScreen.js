import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from '@rneui/base'
import { registerService } from '../services/userService'



export default function RegisterScreen({ navigation }) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitRegister = async () => {
    const data = await registerService({ name, email, password })
    if (!data.error) {
      navigation.navigate('Wall')
    }
    else {
      console.log("Registro incorrecto", data.body)
    }

  }
  console.log(name, email, password)
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <StatusBar barStyle='light'></StatusBar>
      <View>
        <Text h2 style={styles.title}>Create a Signal Account</Text>
        <View style={styles.input}>
          <Input
            onChangeText={(text) => setName(text)}
            value={name}
            type='text'
            placeholder='Name'
          />
          <Input
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder='Email'
          />
          <Input
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder='Password'
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttonStyle}>
          <Button
            onPress={submitRegister}
            title="Register"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  input: {
    width: 300
  }

})