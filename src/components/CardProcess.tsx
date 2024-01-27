import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CardProcessProps {
    nameO: string;
    countryO: string;
    nameD: string;
    countryD: string;
    date: string;
    passengers: string;
}

function CardProcess({nameO, countryO, nameD, countryD, date, passengers,}: CardProcessProps) {
  return (
    <View style={styles.container}>
      <View style={styles.destinyView}>
        <View>
          <Text style={styles.city}>{nameO}</Text>
          <Text style={styles.country}>{countryO}</Text>
        </View>

        <Icon name='airplane' color='#5C6EF8' style={styles.planeIcon} size={25}/>


        <View>
          <Text style={styles.city}>{nameD}</Text>
          <Text style={styles.country}>{countryD}</Text>
        </View>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.date}>{passengers}</Text>
      </View>
    </View>
  );
}

export default CardProcess;

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    paddingHorizontal: 5,
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
  planeIcon:{
    position: 'absolute',
    left:'45%'
  }
});
