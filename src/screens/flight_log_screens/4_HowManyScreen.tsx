import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BtnNext from '../../components/BtnNext'
import Numbers from '../../components/DropDownList'
import  Icon  from 'react-native-vector-icons/AntDesign'


export default function HowManyScreen() {
  return (
        <View style={{position:"relative", flex: 1,padding: 20}}>
          <View style={styles.containerInput}>
            <Text style={styles.title}>How many {'\n'}passengers?</Text>
          </View>
            <Icon name='caretright' color='blue' size={25} style={styles.iconLeft}/>
            <Icon name='caretleft' color='blue' size={25}style={styles.iconRight}/>
          <View style={styles.piker}>
            <Numbers/>
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
        transform: [{ translateX: -100 }], //mitad del ancho del boton 
      },
      piker:{
        position:'absolute',
        left: '50%',
        top: '10%'
      },
      iconLeft:{
        position:"absolute",
        top: "37.5%",
        left: "30%"
      },
      iconRight:{
        position:"absolute",
        top: "37.5%",
        right: "30%"
      }
    })