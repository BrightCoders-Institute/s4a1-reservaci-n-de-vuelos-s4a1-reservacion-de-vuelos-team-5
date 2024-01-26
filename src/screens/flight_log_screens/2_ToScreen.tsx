import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'
import BtnNext from '../../components/BtnNext'
import CardProcess from '../../components/CardProcess'

export default function ToScreen({route}) {
  const [destinyInput, setDestinyInput] = useState("")
  const {origin} = route.params;
  const objetoDeVariables = {origin: origin, destiny: destinyInput}
  const objetoParaPasarANext = {route:'SelectDateScreen', params:objetoDeVariables}
  return (
    <View style={{position:"relative", flex: 1,padding: 20}}>
        <CardProcess nameO = {origin} countryO='' nameD='' countryD='' date='' passengers=''/>
      <View style={styles.containerInput}>
        <Text style={styles.title}>Where you will be {'\n'}flying to?</Text>
        
        <TextInput value={destinyInput} onChangeText={setDestinyInput}style={styles.input} placeholder='Select Location'></TextInput>
      </View>
      <View style={styles.btn}>
        <BtnNext next={objetoParaPasarANext}></BtnNext>
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

