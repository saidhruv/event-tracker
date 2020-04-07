/** @format */

import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    display: 'flex',
    flexDirection: 'column',
  },

  backgroundBlack: {
    backgroundColor: 'black',
  },

  textPrimary: {
    color: 'white',
  },

  textInput: {
    color: 'white',
    fontSize: 100,
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-UltraLight' : 'sans-serif-thin',
    fontWeight: '100',
    top: 220,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },

  errorContainer: {
    top: 220,
    height: 50,
  },

  error: {
    backgroundColor: 'red',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-UltraLight' : 'sans-serif',
    fontWeight: '300',
    fontSize: 15,
    textAlign: 'center',
  },

  button: {
    top: 250,
  },
});

export default styles;
