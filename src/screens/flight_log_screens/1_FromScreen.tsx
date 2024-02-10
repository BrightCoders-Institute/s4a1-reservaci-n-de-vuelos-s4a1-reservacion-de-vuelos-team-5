import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import React, {createContext, useContext, useState} from 'react';
import BtnNext from '../../components/BtnNext';
import ToScreen from './2_ToScreen';
import { SelectList } from 'react-native-dropdown-select-list'
import ciudades from '../../data/ciudades.json';

const btn = () =>{ 
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.txt}>Next</Text>
    </View>
  )
}

const data = [
  {key:'1',value:'Jammu & Kashmir'},
  {key:'2',value:'Gujrat'},
  {key:'3',value:'Maharashtra'},
  {key:'4',value:'Goatttt'},
];

export default function FromScreen() {
  const [originInput, setOriginInput] = useState("");
  const [selected, setSelected] = React.useState("");
  const objetoDeVariables = {origin: originInput};
  const objetoParaPasarANext = {route: 'ToScreen', params: objetoDeVariables};
  
  return (
    <View style={{position: 'relative', flex: 1, padding: 20}}>
      <View style={styles.containerInput}>
        <Text style={styles.title}>Where are you {'\n'}now?</Text>
          <TouchableOpacity>
            
          <SelectList 
          setSelected={(val:any) => {
            setOriginInput(val)
          }} 
          data={ciudades} 
          save="value"
          placeholder='Select a city'
          />
          </TouchableOpacity>

      </View>
      <View style={styles.btn}>
        {originInput.length>=1 
        ? <BtnNext next={objetoParaPasarANext}/> 
        : btn()
    }
        
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
