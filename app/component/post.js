import React, { useContext, useEffect, useState } from "react"
import { View, Text, Image, FlatList, StyleSheet } from "react-native"
import { HeartIcon } from "react-native-heroicons/outline"
import PostContext from "../context/post/PostContext"
import UserContext from "../context/user/UserContext"
import Comment from "./Comment"
import InputComment from "./InputComment"
import { createId } from "../utils/uuid"

const Post = ({ post }) => {

  const [comments, setComments] = useState([])

  const { addComment } = useContext(PostContext)
  const { getUser } = useContext(UserContext)

  const user = getUser()
  const { token, userId, photo } = user.state.body

  useEffect(() => {
    setComments(post.item.comments)
  }, [])

  const addInputComment = async (commentInput, postId) => {
    // setComments(post.item.comment)
    const newComment = {
      commentId: await createId(),
      userId,
      postId,
      name: 'Tú',
      comment: commentInput
    }
    setComments([...comments, newComment])
    const comment_ok = addComment(token, userId, commentInput, postId, newComment.commentId)
    if (comment_ok.error) {
      alert("error")
    }
  }

  return (
    <View style={styles.list}>
      <View style={styles.header}>
        <Image
          style={styles.icon}
          source={{
            uri: 'https://res.cloudinary.com/dcn1tgjkh/image/upload/v1621187598/l2etghkpnozdxl85coxq.jpg'
          }} />
        <Text style={styles.name}>{post.item.name}</Text>
      </View>
      <Text style={styles.title}> {post.item.title}</Text>
      <Text>{post.item.comment}</Text>
      {/* /* create a galeery Image with the photos on bottom side */}
      < Image
        source={{
          uri: `${post.item.photo}`
        }}
        style={styles.image}>
      </Image>
      <View style={styles.like}>
        <HeartIcon color={'red'} size={20} />
        <Text style={styles.like_text}>
          {post.item.likes}
        </Text>
      </View>
      <FlatList
        data={comments}
        keyExtractor={comment => comment.commentId}
        renderItem={item => <Comment commentary={item} />}
        extraData={comments}
      />
      <InputComment
        postId={post.item.postId}
        addInputComment={addInputComment}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  like_text: {
    marginLeft: 10
  },
  icon: {
    width: 34,
    height: 34,
    borderRadius: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,

  },
  name: {
    marginLeft: 14,
    color: '#943ab2',
    fontWeight: '600'

  },
  image:
  {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: 290,
    borderRadius: 8,
  },
  list: {
    marginLeft: '2%',
    marginBottom: 14,
    marginRight: '2%'
  }
})


export default Post