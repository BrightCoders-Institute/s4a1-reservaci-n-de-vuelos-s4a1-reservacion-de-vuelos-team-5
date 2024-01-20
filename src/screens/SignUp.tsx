import React, {useState} from 'react';
import {Switch, StyleSheet, View, Text} from 'react-native';
import SignUpButton from '../components/SignUpButton';
import SignUpInputItem from '../components/SignUpInputItem';

function SignUp(): React.JSX.Element {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState2 => !previousState2);
  return (
    <View style={styles.view}>
      <View style={styles.inputsView}>
        <SignUpInputItem
          placeholder="Your Name"
          title="First Name"
          secure={false}
        />
        <SignUpInputItem
          placeholder="email@email.com"
          title="Email"
          secure={false}
        />
        <View style={{display: 'flex', alignItems: 'center', gap: 5}}>
          <SignUpInputItem
            placeholder="Password123"
            title="Password"
            secure={true}
          />
          <Text style={styles.simpleText}>Use 8 or more characteres</Text>
        </View>
      </View>
      <View style={{display: 'flex', gap: 8}}>
        <View style={styles.checkboxView}>
          <Text style={styles.simpleText}>
            I agree to the Terms and Privacy Policy
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#5065FF' : '#rBFBFBF '}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.checkboxView}>
          <Text style={styles.simpleText}>
            Subscribe for select product updates
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled2 ? '#5065FF' : '#rBFBFBF '}
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
      </View>

      <View style={styles.buttonsView}>
        <SignUpButton title="Sign Up" />
        <Text style={styles.simpleText}>or</Text>
        <SignUpButton title="Sign Up with Google" />
        <Text style={styles.simpleText}>
          Already have an account? <Text style={{color: 'blue'}}>Log In</Text>
        </Text>
      </View>
    </View>
  );
}

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
  checkboxView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  buttonsView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  simpleText: {
    color: 'grey',
  },
});

export default SignUp;
