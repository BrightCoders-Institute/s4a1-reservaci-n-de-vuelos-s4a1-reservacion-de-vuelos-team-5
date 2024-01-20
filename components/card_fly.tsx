import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

function Card_fly() {
  return (
    <View style={styles.container}>
      <View>
        <Text>BEG</Text>
        <Text>Serbia</Text>
        <Text>AMS</Text>
        <Text></Text>
      </View>
    </View>
  )
}

export default Card_fly

const styles = StyleSheet.create({
  any:{
    color: "black",
  }, 
  container: {
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    justifyContent: "center",
    width:'auto',
    height:'auto',
  },
});