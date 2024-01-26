import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BtnNext from '../../components/BtnNext';
import CardProcess from '../../components/CardProcess';

export default function FinalRegister({route}) {
  const {origin, destiny, date, passengers} = route.params;
  return (
    <View style={styles.containerView}>
      <View style={{marginTop: 130}} />
      <CardProcess
        nameO={origin}
        countryO=""
        nameD={destiny}
        countryD=""
        date={date}
        passengers={`${passengers + 1} passengers`}
      />
      <View style={styles.containerInput}>
        <Text style={styles.title}>Your request {'\n'}was received.</Text>
      </View>
      <View style={styles.btn}>
        <BtnNext next={'FinalRegister'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    position: 'relative',
    flex: 1,
    padding: 20,
  },
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
});
