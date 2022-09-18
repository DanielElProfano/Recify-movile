export const GET_POST = 'http://192.168.1.115:4000/post/get'



const HEADERS = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  },
}

export const getAllPost = async (token) => {
  console.log("token reducer", token)
  try {
    const request = await fetch(GET_POST, {
      method: 'GET',
      headers: {
        ...HEADERS,
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
    })
    const response = await request.json()
    return response

  } catch {
    (error = () => {
      console.log(response.error)
    })
  }
}
