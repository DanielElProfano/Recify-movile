import React, { useState, useContext } from 'react';
import UserContext from '../context/user/UserContext';

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native'

export default function LoginScreen({ navigation }) {

  const { loginUser } = useContext(UserContext)
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState(null);

  const onPressLoginButton = async () => {
    const data = await loginUser('arriba@abajo.com', 'arriba')
    if (!data.error) {
      navigation.navigate('Wall')
    }
  }

  return (
    <SafeAreaView >
      <View>
        < Text style={styles.center}>
          Recsifey
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          underlineColorAndroid='2200ff'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Button
          style={styles.buttonStyle}
          onPress={onPressLoginButton}
          title="Login"
          color="#f194ff"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  center: {
    // display: 'flex',
    textAlign: 'center',
    fontSize: 24,
    paddingBottom: 10
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  button: {
    borderRadius: 99
  }

});