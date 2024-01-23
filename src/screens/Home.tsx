import React from 'react';
import CardFlight from '../components/CardFlight';
import {StyleSheet, View} from 'react-native';
import BtnAddFly from '../components/BtnAddFly';

export default function Home() {
  return (
    <View style={styles.homeView}>
      <CardFlight />
      <CardFlight />
      <CardFlight />
      <CardFlight />
      <CardFlight />
      <CardFlight />
      <View style={styles.addFly}>
        <BtnAddFly/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeView: {
    padding: 28,
    display: 'flex',
    gap: 15,
    flex: 1,
    
  },
  addFly: {
    position: 'absolute',
    left:'50%',
    top: '90%'
  }
});
