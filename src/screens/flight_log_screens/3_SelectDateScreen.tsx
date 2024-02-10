import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BtnNext from '../../components/BtnNext';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import CardProcess from '../../components/CardProcess';
const btn = () =>{ 
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.txt}>Next</Text>
    </View>
  )
}


export default function SelectDateScreen({route}) {
  const [selectedDay, setSelectedDay] = useState('');
  const {origin, destiny} = route.params;
  const objetoDeVariables = {
    origin: origin,
    destiny: destiny,
    date: selectedDay,
  };
  const objetoParaPasarANext = {
    route: 'HowManyScreen',
    params: objetoDeVariables,
  };

  const currentDate = new Date();
  const city = origin.split(", ")
  const cityD = destiny.split(", ")

  return (
    <View style={{position: 'relative', flex: 1, padding: 20}}>
      <CardProcess
       nameO={city[1]}
       countryO={city[0]}
       nameD={cityD[1]}
       countryD={cityD[0]}
        date=""
        passengers=""
      />
      <View style={styles.containerInput}>
        <Text style={styles.title}>Select Date</Text>
      </View>
      <Calendar
        onDayPress={day => setSelectedDay(day.dateString)}
        enableSwipeMonths={true}
        minDate={currentDate.toDateString()}
        markedDates={{
          [selectedDay]: {
            selected: true,
            dotColor: 'red',
            selectedColor: 'blue',
          },
        }}
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
        }}
      />
      <View style={styles.btn}>
      {selectedDay.length>=1 ? <BtnNext next={objetoParaPasarANext}/>: btn()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    marginTop: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    margin: 14,
    marginBottom: 15,
    color: 'black',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: 14,
    marginTop: 20,
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '45%',
    top: '90%',
    transform: [{translateX: -90}], //mitad del ancho del boton
  },
  btnContainer: {
    backgroundColor: '#B6B7BA',
    alignItems: 'center',
    width: 280,
    borderRadius: 7,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  txt: {
    color: 'white',
  }
});
