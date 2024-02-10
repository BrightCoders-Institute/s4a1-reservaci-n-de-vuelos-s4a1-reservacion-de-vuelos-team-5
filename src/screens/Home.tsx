import React, {useEffect, useState, useContext} from 'react';
import CardFlight from '../components/CardFlight';
import {StyleSheet, View, ScrollView} from 'react-native';
import BtnAddFly from '../components/BtnAddFly';
import firestore from '@react-native-firebase/firestore';
import {UserContext} from '../../App';

interface FlightData {
  destino: string;
  origen: string;
  fecha: string;
  pasajeros: string;
  usuario: string;
}

export default function Home() {
  const [data, setData] = useState<FlightData[]>([]);
  const {user} = useContext(UserContext);

  useEffect(() => {
    console.log('Home inicio con: ', user);
    const loadData = firestore()
      .collection('vuelos')
      .onSnapshot(snapshot => {
        const newData = snapshot.docs.map(document => document.data().Vuelos);
        setData(newData);
      });
    return () => loadData();
  }, [user]);

  return (
    <>
      <ScrollView>
        <View style={styles.homeView}>
          {data.map((vuelo, index) => {
            if (vuelo !== undefined && vuelo.usuario === user) {
              const city = vuelo.origen.split(", ")
              const cityD = vuelo.destino.split(", ")
              return (
                <CardFlight
                  key={index}
                  pasajeros={vuelo.pasajeros}
                  fecha={vuelo.fecha}
                  origen={city[1]}
                  destino={cityD[1]}
                  origen2={city[0]}
                  destino2={city[0]}
                />
              );
            }
            return null;
          })}
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
    gap: 20,
    flex: 1,
  },
  addFly: {
    position: 'absolute',
    left: '43%',
    top: '90%',
  },
});
