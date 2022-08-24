import React, { useRef, useState } from "react"
import { Image, StyleSheet, TextInput, View } from "react-native"

const InputComment = ({ postId, addInputComment }) => {

  const [input, setInput] = useState("")

  const myComment = useRef()

  const addComment = () => {
    myComment.current.clear()

    addInputComment(input, postId)
  }

  return (
    <View>
      {/* <Image style={styles.icon} source={{ uri: `${userIcon}` }} /> */}
      <TextInput
        style={styles.inputContainer}
        onChangeText={(text) => setInput(text)}
        value={input}
        type='text'
        ref={myComment}
        placeholder='... Add comment ...'
        onSubmitEditing={() => addComment()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    color: 'gray',
    backgroundColor: '#eeeeee',
    fontSize: 16,
    borderRadius: 50,
    padding: 3,
    paddingLeft: 10,
    marginTop: 10
  },
  icon: {
    width: 34,
    height: 34,
    borderRadius: 50
  },
})

export default InputComment