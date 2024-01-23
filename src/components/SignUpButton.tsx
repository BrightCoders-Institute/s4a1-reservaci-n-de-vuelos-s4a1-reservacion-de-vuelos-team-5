import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignUpButton = ({title}: any) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.Button}
      onPress={() => navigation.navigate('Home')}>
      <View style={styles.containerButton}>
        <Text style={styles.Btn_txt}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    width: 300,
    alignItems: 'center',
    padding: 10,
    marginVertical: 15,
    borderRadius: 8,
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
