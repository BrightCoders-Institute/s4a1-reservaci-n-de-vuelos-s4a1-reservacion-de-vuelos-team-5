import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function SignUpInputItem ({placeholder, title, secure}){
  return (
    <View>
      <Text>{title}</Text>
      <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={secure}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 50,
        marginTop: 10,
        marginBottom: 18,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
        padding: 10,
      },
})
