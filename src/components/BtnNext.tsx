import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

export default function BtnNext({next}:any,{value}: any) {
  const navigation = useNavigation();
  return (
     <TouchableOpacity
    onPress={()=>navigation.navigate(next, value)}
    >
        <View style={styles.container}>
          <Text style={styles.txt}>Next</Text>
        </View> 
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#5C6EF8',
    alignItems: 'center',
    width: 280,
    borderRadius:7,
    paddingVertical: 8,
    paddingHorizontal: 15,
  }, 
  txt:{
    color:'white'
  }
})