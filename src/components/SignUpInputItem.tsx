import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

export default function SignUpInputItem({placeholder, title, secure}) {
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
