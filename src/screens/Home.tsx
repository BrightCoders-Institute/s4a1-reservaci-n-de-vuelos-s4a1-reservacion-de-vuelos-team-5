import React, {useEffect, useState, useContext} from 'react';
import CardFlight from '../components/CardFlight';
import {StyleSheet, View, ScrollView} from 'react-native';
import BtnAddFly from '../components/BtnAddFly';
import firestore from '@react-native-firebase/firestore';
import GlobalContext from '../context/context';
import {UserContext} from '../../App';

interface FlightData {
  destino: string;
  origen: string;
  fecha: string;
  pasajeros: string;
  usuario: string;
}

export default function Home() {
  const [data, setData] = useState<FlightData[]>([]); //esto para que es?
  const {user} = useContext(UserContext);
  console.log('Home inicio con el usuario: ', user);
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
          {/*ESTA PARTE DA ERROR =>*/}
          {/* {data.map((vuelo, index) => {
            if (vuelo.usuario === user) {
              return (
                <CardFlight
                  key={index}
                  pasajeros={vuelo.pasajeros}
                  fecha={vuelo.fecha}
                  origen={vuelo.origen}
                  destino={vuelo.destino}
                />
              );
            }
            return null; // Agrega un retorno null en el caso de que la condición no se cumpla
          })} */}
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
