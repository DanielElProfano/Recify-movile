import { LOGIN_USER, GET_USER, GET_USER_TOKEN } from "./types";

export default (state, action) => {
  const { type, payload } = action
  switch (type) {
    case LOGIN_USER:
      state = payload
      console.log("state", state)
      return {
        state,
      }
  }
}
