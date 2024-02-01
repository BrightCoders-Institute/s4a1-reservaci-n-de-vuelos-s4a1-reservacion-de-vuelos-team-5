import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


interface CardProcessProps {
  destino: string
  origen: string,
  fecha: string,
  pasajeros: string
}

function CardFlight({ origen, destino, fecha, pasajeros}:CardProcessProps) {
  
  return (
    <View style={styles.container}>
      <View style={styles.destinyView}>
        <View>
          <Text style={styles.city}>{origen}</Text>
          <Text style={styles.country}>serbia</Text>
        </View>

        <Icon name='airplane' color='#5C6EF8' size={25}/>

        <View>
          <Text style={styles.city}>{destino}</Text>
          <Text style={styles.country}>serbia</Text>
        </View>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.date}>{fecha}</Text>
        <Text style={styles.date}>{pasajeros} passengers</Text>
      </View>
    </View>
  );
}

export default CardFlight;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderWidth: 1,
    width: 'auto',
    height: 'auto',
    paddingHorizontal: 5,
    borderRadius: 9,
    borderColor: '#5C6EF8'
    
  },
  destinyView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  dateView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 18,
  },
  city: {
    color: 'black',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
    paddingBottom: 5,
  },
  country: {
    color: 'grey',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  date: {
    color: 'black',
    fontWeight: '600',
  },
});
