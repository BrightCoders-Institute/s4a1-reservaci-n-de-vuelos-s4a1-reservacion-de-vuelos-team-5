// import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CardFlight from '../components/CardFlight';
import {StyleSheet, View} from 'react-native';

export default function Home() {
  return (
    <View style={styles.homeView}>
      <CardFlight />
      <CardFlight />
    </View>
  );
}

const styles = StyleSheet.create({
  homeView: {
    padding: 28,
    display: 'flex',
    gap: 15,
  },
});
