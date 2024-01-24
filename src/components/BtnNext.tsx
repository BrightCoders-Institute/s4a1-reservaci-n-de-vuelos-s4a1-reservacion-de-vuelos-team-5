import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

export default function BtnNext({next}) {
  const navigation = useNavigation();
  return (
     <TouchableOpacity
    onPress={()=>navigation.navigate(next)}
    >
        <View style={styles.container}>
          <Text style={styles.txt}>Next</Text>
        </View> 
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'blue',
    alignItems: 'center',
    width: 200,
    borderRadius:7,
    paddingVertical: 8,
    paddingHorizontal: 15,
  }, 
  txt:{
    color:'white'
  }
})