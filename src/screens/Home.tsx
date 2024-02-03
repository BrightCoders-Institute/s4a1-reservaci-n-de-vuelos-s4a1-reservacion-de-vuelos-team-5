import React, {useEffect, useState} from 'react';
import CardFlight from '../components/CardFlight';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import BtnAddFly from '../components/BtnAddFly';
import firestore from '@react-native-firebase/firestore';

interface FlightData {
  destino: string;
  origen: string;
  fecha: string;
  pasajeros: string;
}

export default function Home() {
  const [data, setData] = useState<FlightData[]>([]);

  useEffect(() => {
    const loadData = firestore()
      .collection('vuelos')
      .onSnapshot(snapshot => {
        const newData = snapshot.docs.map(document => document.data().Vuelos);
        setData(newData);
      });
    return () => loadData();
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.homeView}>
          {data.map(
            (vuelo, index) =>
              vuelo && (
                <CardFlight
                  key={index}
                  pasajeros={vuelo.pasajeros}
                  fecha={vuelo.fecha}
                  origen={vuelo.origen}
                  destino={vuelo.destino}
                />
              ),
          )}
        </View>
      </ScrollView>
      <View style={styles.addFly}>
        <BtnAddFly />
      </View>
    </>
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
    left: '43%',
    top: '90%',
  },
});
