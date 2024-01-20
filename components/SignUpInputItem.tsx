import { StyleSheet, Text, View, TextInput } from 'react-native'
import React,{useState } from 'react'


export default function SignUpInputItem ({placeholder, title, secure}){
  const [deselect, setSelect] = useState(false)

  return (
    <View>
      <Text>{title}</Text>
      <TextInput 
        style={[styles.input, deselect && styles.isSelected]} 
        placeholder={placeholder} 
        secureTextEntry={secure} 
        onFocus={() => setSelect(true)}
        onBlur ={() => setSelect(false)}/>
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
      isSelected:{
        borderColor: 'purple',
        backgroundColor: 'lightpurple',
      }
})
