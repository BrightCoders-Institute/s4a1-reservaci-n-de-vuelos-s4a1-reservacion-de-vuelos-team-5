import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

interface LoginButtonProps {
  press: () => void;
}
const LoginButton: React.FC<LoginButtonProps> = ({press}) => {
  return (
    <TouchableOpacity style={styles.Button} onPress={press}>
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

export default LoginButton;
