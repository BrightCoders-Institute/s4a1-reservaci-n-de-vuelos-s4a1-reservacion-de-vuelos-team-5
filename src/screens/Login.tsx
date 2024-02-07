import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState, useContext} from 'react';
import SignUpInputItem from '../components/SignUpInputItem';
import LoginButton from '../components/LoginButton';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import GlobalContext from '../context/context';

const Login = () => {
  const {setGlobalVariable, globalVariable} = useContext(GlobalContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation();

  async function login(userEmail: string, userPassword: string) {
    try {
      console.log(userPassword);
      console.log(userEmail);
      if (!userEmail || !userPassword) {
        console.error(
          'El correo electrónico y la contraseña son obligatorios.',
        );
        return;
      }
      await auth().signInWithEmailAndPassword(userEmail, userPassword);
      console.log("ya hicisite log")
      setGlobalVariable(userEmail)
      console.log(globalVariable)
      console.log("ya pasaste setGlobal")
      navigation.navigate('Home');
    } catch (error: any) {
      Alert.alert(' Email or Password are invalid', error.ToString()); //error.toString()
    }
  }

  return (
    <View style={styles.view}>
      <Text style={styles.simpleText}>Log In</Text>
      <SignUpInputItem
        func={setEmail}
        placeholder="email@email.com"
        title="Email"
        secure={false}
      />
      <SignUpInputItem
        func={setPassword}
        placeholder="Pasword123"
        title="Password"
        secure={false}
      />
      <LoginButton
        press={() => {
          login(email, password);
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    gap: 50,
    alignItems: 'center',
    margin: 30,
  },
  inputsView: {
    display: 'flex',
    gap: 22,
  },

  buttonsView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  simpleText: {
    color: 'grey',
    fontSize: 30,
  },
});
