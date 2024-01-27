import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BtnNext from '../../components/BtnNext'

export default function HowManyScreen() {
  return (
        <View style={styles.btn}>
          <BtnNext next={'FinalRegister'}></BtnNext>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        btn:{
          display: "flex",
          justifyContent: "center",
          alignItems:'center',
          position: 'absolute',
          left: "50%",
          top: '90%',
          transform: [{ translateX: -100 }] //mitad del ancho del boton
        }
    })