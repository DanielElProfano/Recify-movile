import React, { useReducer } from "react"
import PostContext from "./PostContext"
import PostReducer from "./PostReducer"
import { getAllPost } from "../../services/postService"
import HomeScreen from "../../screens/HomeScreen"
import { addCommentService } from "../../services/commentService"

const PostState = (props) => {

  const initialState = {
    error: null,
    statusCode: null,
    body: null
  }
  const [state, dispatch] = useReducer(PostReducer, initialState)

  const getPost = async () => {
    try {
      console.log("data", data)
      const data = await getAllPost()
      const { body, status, error } = data
      if (!error) {
        console.log("hola")
        const orderArray = body.forEach(element => {
          console.log("element", element)
        });
        dispatch({
          type: 'GET_ALL_POST',
          payload: data
        })

        return state.body
      }
    } catch {
      (error, () => console.log(error))
    }
  }
  const addComment = async (token, userId, comment, postId, commentId, res_to_commentId) => {
    try {
      console.log("userId: ", userId)
      const data = await addCommentService(
        token,
        userId,
        comment,
        postId,
        commentId,
        res_to_commentId)
      console.log("data add comment:", data)

    } catch (error) {
      console.log("error add comment", error)
    }
  }

  return (
    <PostContext.Provider value={
      {
        error: state.error,
        statusCode: state.statusCode,
        body: state.body,
        getPost,
        addComment,
      }
    }>
      <HomeScreen />
    </PostContext.Provider>
  )
}
export default PostState
