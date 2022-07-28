import React from "react"
import { View, Text, Image, FlatList } from "react-native"

const Comment = ({ comment }) => {
    return (
        <View>
            <Text>{comment.item.comment}</Text>
            <Text>Likes: {comment.item.likes}</Text>
        </View>
    )

}

export default Comment