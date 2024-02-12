import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

export default function SignUpInputItem({placeholder, title, secure, func}) {
  const [isFocused, setIsFocused] = useState(false);
  function handleFocus() {
    setIsFocused(true);
  }
  const handleBlur = () => {
    setIsFocused(false);
  };
  
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput
          onChangeText={func}
        style={[
          styles.input,
          {
            borderColor: isFocused ? 'blue' : 'grey',
          },
        ]}
        placeholder={placeholder}
        secureTextEntry={secure}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 320,
    height: 50,
    marginTop: 10,
    // marginBottom: 25,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  text: {
    color: '#0017BB',
    fontSize: 16,
  },
});
