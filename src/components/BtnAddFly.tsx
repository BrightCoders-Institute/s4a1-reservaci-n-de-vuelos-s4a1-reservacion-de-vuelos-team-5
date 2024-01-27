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

        <View style={styles.containerIcon}>
        <Icon name='plus-circle' size={70} color={'#5C6EF8'} style={styles.iconFly}/>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerIcon: {
    height: 67,
    width: 63,
    borderRadius: 50,
    backgroundColor: '#F3F2F3'
  },
  iconFly: {
    backgroundColor: '#F3F2F3',

  }

});