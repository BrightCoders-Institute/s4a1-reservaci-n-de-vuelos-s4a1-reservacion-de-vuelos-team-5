import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import BtnNext from '../../components/BtnNext';
import CardProcess from '../../components/CardProcess';
import ciudades from '../../data/ciudades.json';

const btn = () =>{ 
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.txt}>Next</Text>
    </View>
  )
}

export default function ToScreen({route}) {
  const [destinyInput, setDestinyInput] = useState('');
  const [selected, setSelected] = React.useState("");
  const {origin} = route.params;
  const objetoDeVariables = {origin: origin, destiny: destinyInput};
  const objetoParaPasarANext = {
    route: 'SelectDateScreen',
    params: objetoDeVariables,
  };

const city = origin.split(", ")


  return (
    <View style={{position: 'relative', flex: 1, padding: 20}}>
      <CardProcess
        nameO={city[1]}
        countryO={city[0]}
        nameD=""
        countryD=""
        date=""
        passengers=""
      />
      <View style={styles.containerInput}>
        <Text style={styles.title}>Where you will be {'\n'}flying to?</Text>
        <TouchableOpacity>
            
          <SelectList 
          setSelected={(val:any) => {
            setDestinyInput(val)
          }} 
          data={ciudades} 
          save="value"
          placeholder='Select a city'
          />
          </TouchableOpacity>

  
      </View>
      <View style={styles.btn}>
      {destinyInput.length>=1 ? <BtnNext next={objetoParaPasarANext}/>:btn()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    marginTop: 90,
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
