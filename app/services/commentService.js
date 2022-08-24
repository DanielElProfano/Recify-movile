export const ADD_COMMENT = 'http://192.168.1.115:4000/comment/create'

export const addCommentService = async (token, userId, comment, postId, commentId, res_to_commentId) => {
  console.log("servide", token, comment, userId, postId, res_to_commentId)
  try {
    const request = await fetch(ADD_COMMENT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
      body: JSON.stringify({
        comment,
        userId,
        postId,
        commentId,
        res_to_commentId
      })
    })
    const response = await request.json()
    console.log("comment Service response:", response)
    return response
  } catch {
    (error) => {
      console.log("error adding a comment")
    }
  }
}