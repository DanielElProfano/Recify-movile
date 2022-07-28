import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Post from '../component/post'
import { seed } from '../seed/seed'


import UserContext from "../context/user/UserContext";

export default function HomeScreen({ navigation, route }) {

  const { getUser } = useContext(UserContext)
  const [posts, setPosts] = useState([])

  return (
    <View style={styles.container}>
      <FlatList
        data={seed}
        keyExtractor={post => post.postId}
        renderItem={
          (post) => <Post post={post} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#FFFFFF'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});