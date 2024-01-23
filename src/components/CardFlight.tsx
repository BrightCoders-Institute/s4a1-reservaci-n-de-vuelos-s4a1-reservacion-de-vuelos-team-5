import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


function CardFlight() {
  return (
    <View style={styles.container}>
      <View style={styles.destinyView}>
        <View>
          <Text style={styles.city}>beg</Text>
          <Text style={styles.country}>serbia</Text>
        </View>

        <Icon name='airplane' color='blue' style={styles.planeIcon} size={25}/>


        <View>
          <Text style={styles.city}>ams</Text>
          <Text style={styles.country}>serbia</Text>
        </View>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.date}>January 10,2024</Text>
        <Text style={styles.date}>2 passengers</Text>
      </View>
    </View>
  );
}

export default CardFlight;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
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
});
