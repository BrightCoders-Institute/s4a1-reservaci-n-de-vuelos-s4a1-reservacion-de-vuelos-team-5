import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import {useNavigation} from '@react-navigation/native';

export default function BtnAddFly()  {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('FromScreen')}
    >
        <View >
        <Icon name='plus-circle' size={70} color={'blue'}/>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    
});