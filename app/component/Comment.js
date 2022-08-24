import React, { useContext } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import PostContext from "../context/post/PostContext"
import UserContext from "../context/user/UserContext"
import { createId } from "../utils/uuid"

const Comment = ({ commentary }) => {
  const {
    name,
    comment,
    likes,
    photo,
    commentId,
    postId
  } = commentary.item

  const { addComment } = useContext(PostContext)

  const { getUser } = useContext(UserContext)

  const responseToComment = async () => {
    const user = getUser()
    const { token, userId } = user.state.body
    console.log(token, userId)
    const id = await createId()
    const data = await addComment(token, userId, "test Comment", postId, id, commentId)
  }

  const addLike = () => {
    console.log("addLike")
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.comment_container}>
          <Image style={styles.icon} source={{ uri: `${photo}` }} />
          <View style={styles.text_container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.comment}>{comment}</Text>
          </View>
        </View>
        <View style={styles.options_container}>
          <Text style={styles.options} onPress={addLike}>I like it!</Text>
          <Text style={styles.options} onPress={responseToComment}>Answer</Text>
        </View>
      </View>
      {likes && <Text>likes:{likes}</Text>}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  comment_container: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
  text_container: {
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#f1edf7',
    padding: 10
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16
  },
  comment: {
    marginLeft: 10,
    fontSize: 16
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  options_container: {
    marginLeft: 50,
    flexDirection: 'row',

  },
  options: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b1aeb7',
    marginRight: 20,
  }

})
export default Comment