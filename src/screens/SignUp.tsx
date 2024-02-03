import React, {useState} from 'react';
import {Switch, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import SignUpButton from '../components/SignUpButton';
import SignUpInputItem from '../components/SignUpInputItem';
import {useNavigation} from '@react-navigation/native';

function SignUp(): React.JSX.Element {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState2 => !previousState2);

  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={styles.inputsView}>
        <SignUpInputItem
          func={setName}
          placeholder="Your Name"
          title="First Name"
          secure={false}
        />
        <SignUpInputItem
          func={setEmail}
          placeholder="email@email.com"
          title="Email"
          secure={false}
        />
        <View style={{display: 'flex', alignItems: 'center', gap: 5}}>
          <SignUpInputItem
            func={setPassword}
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
        <SignUpButton title="Sign Up" password={password} email={email} />
        <Text style={styles.simpleText}>or</Text>
        <SignUpButton
          password={password}
          email={email}
          title="Sign Up with Google"
        />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <Text style={styles.simpleText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View>
              <Text style={{color: 'blue', fontSize: 15, fontWeight: '900'}}>
                Log In
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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
