import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import BtnNext from '../../components/BtnNext'
import {Calendar, LocaleConfig} from 'react-native-calendars';
import CardProcess from '../../components/CardProcess';


export default function SelectDateScreen({route}) {
  const [selectedDay, setSelectedDay] = useState('');
  const {origin, destiny} = route.params
  const objetoDeVariables = {origin: origin, destiny:destiny, date:selectedDay}
  const objetoParaPasarANext = {route:'HowManyScreen', params: objetoDeVariables}
  
  return (
    <View style={{position:"relative", flex: 1,padding: 20}}>
        <CardProcess nameO = {origin} countryO='' nameD={destiny} countryD='' date='' passengers=''/>
        <View style={styles.containerInput}>
          <Text style={styles.title}>Select Date</Text>
        </View> 
          <Calendar
            onDayPress={day => {
              setSelectedDay(day.dateString);
            }}
            markedDates={{
              [selectedDay]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
            }}
            
            style={{
              backgroundColor: 'white',
              // calendarBackground: 'red',
              textSectionTitleColor: 'white',
              selectedDayBackgroundColor: 'red',
              selectedDayTextColor: 'red',
              todayTextColor: 'blue',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e',
              borderRadius: 10,
            }}
          ></Calendar>
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
          transform: [{ translateX: -90 }] //mitad del ancho del boton
        }
    })