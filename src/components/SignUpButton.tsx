import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


 
interface SignUpProps {
  title: string,
  email: string,
  password: string,
} 

const SignUpButton = ({title,email,password}:SignUpProps) => {
  const navigation = useNavigation();

  function validate(){
    const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(emailPattern.test(email) && passwordPattern.test(password)){
      auth().createUserWithEmailAndPassword(`${email}`, `${password}`)
      Alert.alert('Éxito');
      navigation.navigate('Home')
    } else {
      Alert.alert('Error', '¡El email o contraseña no validos!');

    }
  }
  const len = () => (password.length < 1 || email.length < 1 ? false : true)
  
  return (
    <TouchableOpacity
      style={styles.Button}
      disabled={!len()}
      onPress={validate}>
      <View style={[styles.containerButton, !len() && styles.containerButtonFalse]}>
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
  containerButtonFalse: {
    width: 300,
    alignItems: 'center',
    padding: 10,
    marginVertical: 15,
    borderRadius: 8,
    backgroundColor: 'gray',
  },
});

export default SignUpButton;
