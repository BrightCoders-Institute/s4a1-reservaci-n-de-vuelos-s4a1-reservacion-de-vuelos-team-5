import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BtnNext from '../../components/BtnNext'

export default function FinalRegister() {
  return (
    <View style={{position:"relative", flex: 1,padding: 20}}>
      <View style={styles.containerInput}>
        <Text style={styles.title}>Your request {'\n'}was received.</Text>
      </View>
      <View style={styles.btn}>
        <BtnNext next={'FinalRegister'}></BtnNext>
      </View>
    </View>
      )
    }
    
    const styles = StyleSheet.create({
      containerInput: {
        marginTop: 100,
      },
      title: {
        fontSize: 35,
        fontWeight: 'bold',
        margin:14,
        marginBottom: 15,
        color: 'black',
      },
      btn:{
        display: "flex",
        justifyContent: "center",
        alignItems:'center',
        position: 'absolute',
        left: "45%",
        top: '90%',
        transform: [{ translateX: -100 }] //mitad del ancho del boton
      }
    })