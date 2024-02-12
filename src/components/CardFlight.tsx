import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ciudades from '../data/ciudades.json'
interface CardProcessProps {
  destino: string;
  origen: string;
  fecha: string;
  pasajeros: string;
  origen2: string;
  destino2: string;
}

function CardFlight({origen, destino, fecha, pasajeros, origen2, destino2}: CardProcessProps) {
  return (
    <View style={styles.container}>
      <View style={styles.destinyView}>
        <View>
          <Text style={styles.city}>{origen}</Text>
          <Text style={styles.country}>{origen2}</Text>
        </View>

        <Icon name="airplane" color="#5C6EF8" size={28} />

        <View>
          <Text style={styles.city}>{destino}</Text>
          <Text style={styles.country}>{destino2}</Text>
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
    borderBottomWidth: 5,
    borderWidth: 1,
    width: 'auto',
    height: 'auto',
    paddingHorizontal: 12,
    borderRadius: 12,
    borderColor: '#5C6EF8',
  },
  destinyView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#1414b8',
    borderBottomWidth: 2,
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
    color: '#333c87',
    fontSize: 18,
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
    fontSize: 16,
    color: 'black',
    fontWeight: '900',
  },
});
