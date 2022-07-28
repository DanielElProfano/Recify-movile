import React from "react"
import { View, Text, Image, FlatList, Dimensions, StyleSheet } from "react-native"
import Comment from "./Comment"

const Post = ({ post }) => {

  return (
    <View style={styles.container}>
      <Text>{post.item.name}</Text>
      <Text>Title: {post.item.title}</Text>
      <Text>{post.item.comment}</Text>
      <Image
        source={{
          uri: `${post.item.photo}`
        }}
        style={{ width: '100%', height: 300 }}>
      </Image>
      <Text>Likes: {post.item.likes}</Text>
      <FlatList
        data={post.item.commentsArray}
        keyExtractor={item => item.commentId}
        renderItem={item => <Comment comment={item} />}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 10,

  }
})


export default Post