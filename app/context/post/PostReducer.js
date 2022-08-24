import { GET_ALL_POST } from "./types";

export default (state, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_POST:
      state = payload
      return {
        state,
      }
  }
}
