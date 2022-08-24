import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { PlusIcon } from "react-native-heroicons/outline";
import Post from '../component/post'
import PostContext from "../context/post/PostContext";
import UserContext from "../context/user/UserContext";
import { getAllPost } from "../services/postService";

export default function HomeScreen({ navigation, route }) {


  const [post, setPost] = useState([])
  const addPost = () => {
    console.log("add a Post")
  }
  const { getPost } = useContext(PostContext)
  const { getUserToken } = useContext(UserContext)

  const arrayToOrder = (array) => {
    console.log("hola", array)

    array.forEach(element => {
      console.log(element)
      if (element.comments.length) {
        const arrayOfResponseToComments = element.comments.filter(comment => comment.res_to_commentId)
        console.log("comments", arrayOfResponseToComments)
        element.comments.forEach((comment) => {
          arrayOfResponseToComments.forEach(commentResponse => {
            if (comment.commentId === commentResponse.res_to_commentId) {
              comment.moreComments = [...commentResponse]
            }
          })
        })
      }
      console.log("Array", element)
    })
  }

  useEffect(() => {
    const getThePosts = async () => {
      const user = getUserToken()
      const data = await getAllPost(user.state.body.token)
      const { error, body, status } = data
      console.log("data", data)
      const newArray = arrayToOrder(body)
      setPost(body)
    }
    getThePosts()
  }, [])

  return (
    <View style={styles.container}>
      <PlusIcon color={'#db9eef'} size={50} style={styles.addIcon}
        onPress={addPost}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={post}
        keyExtractor={post => post.postId}
        ItemSeparatorComponent={({ unhighlight }) => (
          <View style={
            {
              borderBottomWidth: 1,
              borderBottomColor: '#DDDDDD',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10
            }}>
          </View>
        )}
        renderItem={
          (post) => <Post post={post} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },
  addIcon: {
    position: 'absolute',
    right: 20,
    top: 10,
    zIndex: 1
  }

});