import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import CardProcess from '../../components/CardProcess';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../../App';

export default function FinalRegister({route}) {
  const usersCollection = firestore().collection('vuelos');
  const {origin, destiny, date, passengers} = route.params;
  const navigation = useNavigation();
  const {user} = useContext(UserContext);

  const city = origin.split(", ")
  const cityD = destiny.split(", ")

  return (
    <View style={styles.containerView}>
      <View style={{marginTop: 130}} />
      <CardProcess
        nameO={city[1]}
        countryO={city[0]}
        nameD={cityD[1]}
        countryD={cityD[0]}
        date={date}
        passengers={`${passengers+1} passengers`}
      />
      <View style={styles.containerInput}>
        <Text style={styles.title}>Your request {'\n'}was received.</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          onPress={ () => {
            usersCollection.add({
              Vuelos: {
                origen: origin,
                destino: destiny,
                fecha: date,
                pasajeros: passengers+1,
                usuario: user,
              },
            });
            navigation.navigate('Home');
          }
          }
        > 
          <View style={{backgroundColor: '#5C6EF8',
    alignItems: 'center',
    width: 280,
    borderRadius: 7,
    paddingVertical: 8,
    paddingHorizontal: 15,}}>
            <Text style={{color:"white",}}>Finish</Text>
          </View>
        </TouchableOpacity>
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
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '45%',
    top: '90%',
    transform: [{translateX: -100}], //mitad del ancho del boton
  },
});
