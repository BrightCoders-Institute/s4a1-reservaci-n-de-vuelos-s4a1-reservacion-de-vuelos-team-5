import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BtnNext from '../../components/BtnNext';
import Icon from 'react-native-vector-icons/AntDesign';
import CardProcess from '../../components/CardProcess';
import WheelPicker from 'react-native-wheely';

export default function HowManyScreen({route}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const {origin, destiny, date} = route.params;
  const objetoDeVariables = {
    origin: origin,
    destiny: destiny,
    date: date,
    passengers: selectedIndex,
  };
  const objetoParaPasarANext = {
    route: 'FinalRegister',
    params: objetoDeVariables,
  };
  return (
    <View style={{position: 'relative', flex: 1, padding: 20}}>
      <CardProcess
        nameO={origin}
        countryO=""
        nameD={destiny}
        countryD=""
        date={date}
        passengers=""
      />

      <View style={styles.containerInput}>
        <Text style={styles.title}>How many {'\n'}passengers?</Text>
      </View>

      <Icon name="caretright" color="blue" size={25} style={styles.iconLeft} />
      <Icon name="caretleft" color="blue" size={25} style={styles.iconRight} />

      <View style={styles.piker}>
        <WheelPicker
          selectedIndex={selectedIndex}
          options={['1', '2', '3', '4', '5', '6', '7', '8', '9']}
          onChange={index => setSelectedIndex(index)}
          itemHeight={60}
          itemTextStyle={{fontSize: 35, color: 'black', fontWeight: '900'}}
        />
      </View>

      <View style={styles.btn}>
      <BtnNext next={objetoParaPasarANext}/>
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
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '45%',
    top: '90%',
    transform: [{translateX: -100}], //mitad del ancho del boton
  },
  piker: {
    position: 'absolute',
    left: '49%',
    top: '35%',
  },
  iconLeft: {
    position: 'absolute',
    top: '53.5%',
    left: '30%',
  },
  iconRight: {
    position: 'absolute',
    top: '53.5%',
    right: '30%',
  },
});
