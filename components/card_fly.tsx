import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

function Card_fly() {
  return (

    <View style={styles.container}>

      <View style={styles.origin}>
        <Text style={styles.Beg}>BEG</Text>
        <Text>Serbia</Text>
      </View>
      <View style={styles.planeIcon}>
        <Icon name='airplane' color='blue' style={styles.planeIcon} size={25}/>
      </View>
      <View style={styles.destination}>
        <Text style={styles.Ams}>AMS</Text>
        <Text>Netherland</Text>
      </View>

    </View>
  )
}

export default Card_fly

const styles = StyleSheet.create({
  any:{
    color: "black",
  },
  origin:{
    justifyContent: 'flex-end'
    
  },
  destination:{
    
  },
  planeIcon:{
    justifyContent: 'center'

  },
  container: {
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    justifyContent: 'space-between',
    flexDirection: 'row',
    width:'auto',
    height:'auto',
    
  },
  Beg:{
    fontSize:30,
    fontWeight: 'bold',
    
  },
  Ams:{
    fontSize:30,
    fontWeight: 'bold',
    
  },
});