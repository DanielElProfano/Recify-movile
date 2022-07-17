import React, { useReducer, } from "react";
import UserReducer from './UserReducer.js'
import UserContext from "./UserContext.js";
import { loginService } from '../../services/userService'
import { View, Text } from "react-native";

const UserState = (props) => {

  const initialState = {
    error: null,
    statusCode: null,
    token: null
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const loginUser = async (email, password) => {
    // const email = 'arriba@abajo.com'
    // const password = 'arriba'
    const data = await loginService({ email, password })
    dispatch({
      type: 'LOGIN_USER',
      payload: data
    })
    return state
  }

  const getUser = () => {
    console.log("getUser")
    dispatch({
      type: 'GET_USER',
      payload: ''
    })
    return state
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