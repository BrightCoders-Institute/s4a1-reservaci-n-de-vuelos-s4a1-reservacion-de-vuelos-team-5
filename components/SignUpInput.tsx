import  React, {useState} from 'react';
import {Switch, StyleSheet, TextInput, View, Text} from 'react-native';
import SignUpButton from './SignUpButton';
import SignUpInputItem from './SignUpInputItem';


function SignUpInput(): React.JSX.Element {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.view}>
      <Text style={styles.signUp}>SIGN UP</Text>
      <SignUpInputItem placeholder='First Name' title='First Name' secure={false}/>
      <SignUpInputItem placeholder='Email' title='Email' secure={false}/>
      <SignUpInputItem placeholder='Password' title='Password' secure={true}/>
      <Text>Use 8 or more characteres</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.txt_agree}>I agree to the Terms and Privacy Policy</Text>
      <Text>Subscribe for select product updates</Text>
      
      <SignUpButton title='Sign Up'/>
      

      <SignUpButton title='Sign Up with Google'/>
      <Text>Already have an account? Log In</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 50,
    marginTop: 10,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    padding: 10,
  },
  input_select: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    padding: 10,
  },
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  signUp: {
    color: "black",
  },
  txt_agree: {
    width: 350,
    textAlign: 'center',
    letterSpacing: 1,
    borderWidth: 1,
  }
});

export default SignUpInput;
