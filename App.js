import InfiniteScroll from 'react-native-infinite-scrolling'
import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Post from './Post'
 
const App = () => {
  const [data, setData] = useState(['This post #1', 'This post #2', 'This post #3', 'This post #4', 'This post #5', 'This post #6'])
  useEffect(() => {
    loadMore()
  },[])
 
  const renderData = ({ item }) => {
    return(
      <View style={styles.container}>
        <Post data={item} />
      </View>
    )
  }
 
  const loadMore = () => { 
    let updatedData = data.concat(['This post #1', 'This post #2', 'This post #3', 'This post #4', 'This post #5', 'This post #6'])
    setData(updatedData)
  }
  return(
    <InfiniteScroll 
      renderData = {renderData}
      data = { data }
      loadMore = { loadMore }  
    />
  )
}
 
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e4ebf2'
  }
})