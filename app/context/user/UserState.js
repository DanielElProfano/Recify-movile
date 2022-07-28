import React, { useReducer, } from "react";
import UserReducer from './UserReducer.js'
import UserContext from "./UserContext.js";
import { loginService } from '../../services/userService'

const UserState = (props) => {

  const initialState = {
    error: null,
    statusCode: null,
    token: null
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const loginUser = async (email, password) => {
    const data = await loginService({ email, password })
    dispatch({
      type: 'LOGIN_USER',
      payload: data
    })
    return state
  }

  const getUser = () => {
    return state.body
  }

  return (
    <UserContext.Provider value={
      {
        error: state.error,
        statusCode: state.statusCode,
        body: state.body,
        loginUser,
        getUser,
      }
    }>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState