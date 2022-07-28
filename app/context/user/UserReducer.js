import { LOGIN_USER, GET_USER } from "./types";

export default (state, action) => {
  const { type, payload } = action
  switch (type) {
    case LOGIN_USER:
      state = payload
      return {
        state,
      }
    case GET_USER:
      return state
    case GET_TOKEN:
      return state.body
  }
}
