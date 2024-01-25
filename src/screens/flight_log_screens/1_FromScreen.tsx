import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {createContext, useContext} from 'react'
import BtnNext from '../../components/BtnNext'
import ToScreen from './2_ToScreen'

export default function FromScreen() {
  return (
    
    <View style={{position:"relative", flex: 1,padding: 20}}>
      
      <View style={styles.containerInput}>
        <Text style={styles.title}>Where are you {'\n'}now?</Text>
        
        <TextInput style={styles.input} placeholder='Select Location'></TextInput>
        
      </View>
      <View style={styles.btn}>
        <BtnNext next={'ToScreen'}></BtnNext>
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
      color: 'black',
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor:'gray',
        marginHorizontal: 14,
        marginTop:20
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