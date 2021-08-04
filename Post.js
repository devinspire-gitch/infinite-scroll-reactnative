import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const Post = (props) => {
  const [like, setLike] = useState(0);

  handleLike = () => {
      setLike(like + 1)
  }
  return (
      <View style={styles.container}>
        <View style={styles.label}>
            <Text>{props.data}</Text>
        </View>
        <View style={styles.row}>
            <Text onPress={handleLike} style={styles.btnTxt}>Like </Text>
            <Text>{like} Likes</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({ 
    container: {
        padding: 10,
        flex: 1, 
        backgroundColor: 'white',
        width: '100%',
        maxHeight: 100,
    },
    row: {
        flexDirection: "row",
        padding: 10
    },
    label: {
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 1,
        padding: 10,    
    },
    btnTxt: {
        textDecorationLine: 'underline',
        color: 'blue'
    }
});

export default Post;