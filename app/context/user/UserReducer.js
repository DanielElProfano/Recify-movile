

import { LOGIN_USER, GET_USER } from "./types";


export default (state, action) => {

  const { type, payload } = action
  console.log(state, payload)
  switch (type) {
    case LOGIN_USER:
      state = payload
      return {
        state,
      }
    case GET_USER:
      return {
        error: state.error,
        status: state.status,
        body: state.body
      }
  }

}
