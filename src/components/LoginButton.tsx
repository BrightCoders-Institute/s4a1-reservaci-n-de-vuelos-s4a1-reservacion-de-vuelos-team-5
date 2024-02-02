
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc  } from 'firebase/firestore';



interface LoginProps {
    email: string,
    password: string,
}

const LoginButton = ({email, password} : LoginProps) => {
    const navegation = useNavigation();
    
   
    return (
        <TouchableOpacity
          style={styles.Button}
          onPress={navegation.navigate('Home')}>
          <View style={[styles.containerButton]}>
            <Text style={styles.Btn_txt}>Login</Text>
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
    
export default LoginButton

