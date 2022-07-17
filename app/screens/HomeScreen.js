import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";


import UserContext from "../context/user/UserContext";

export default function HomeScreen({ navigation, route }) {

  const { getUser } = useContext(UserContext)
  const [dataUser, setDataUser] = useState(null)

  useEffect(() => {
    const userData = getUser()
    setDataUser(userData.state)
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Wall {dataUser && <Text>{dataUser.body}</Text>}
      </Text>
    </View>
  )
}