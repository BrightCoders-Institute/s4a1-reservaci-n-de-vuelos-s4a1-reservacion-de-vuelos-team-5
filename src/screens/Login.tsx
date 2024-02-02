import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import SignUpInputItem from '../components/SignUpInputItem'
import LoginButton from '../components/LoginButton'

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
  return (
    <View style ={styles.view}>
        <Text style = {styles.simpleText}>Login</Text>
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
            email={email}
            password={password}
        />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    view: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-start',
      gap: 50,
      alignItems: 'center',
      margin: 30,
      // borderColor: 'red',
      // borderWidth: 2,
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