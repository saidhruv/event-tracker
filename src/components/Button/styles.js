/** @format */

import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    textTransform: 'lowercase',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-UltraLight' : 'sans-serif-thin',
    fontWeight: '100',
    fontSize: 50,
    textAlign: 'center',
  },
});

export default styles;
