import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {createContext, useContext, useState} from 'react';
import BtnNext from '../../components/BtnNext';
import ToScreen from './2_ToScreen';

export default function FromScreen() {
  const [originInput, setOriginInput] = useState();
  const objetoDeVariables = {origin: originInput};
  const objetoParaPasarANext = {route: 'ToScreen', params: objetoDeVariables};
  return (
    <View style={{position: 'relative', flex: 1, padding: 20}}>
      <View style={styles.containerInput}>
        <Text style={styles.title}>Where are you {'\n'}now?</Text>

        <TextInput
          value={originInput}
          onChangeText={setOriginInput}
          style={styles.input}
          placeholder="Select Location"
        />
      </View>
      <View style={styles.btn}>
        <BtnNext next={objetoParaPasarANext} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    marginTop: 130,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    margin: 14,
    color: 'black',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: 14,
    marginTop: 20,
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
