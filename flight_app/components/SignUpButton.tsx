import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const SignUpButton = ({title}) => {
  return (
    <View style={styles.containerButton}>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.Btn_txt}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    width: 300,
    alignItems: 'center',
    padding: 10,
    marginVertical: 15,
    borderRadius: 5,
    backgroundColor: '#5C6EF8',
  },
  Button: {
    borderRadius: 8,
  },
  Btn_txt: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SignUpButton;
