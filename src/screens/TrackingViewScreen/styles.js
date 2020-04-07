/** @format */

import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },

  toggleableHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },

  backgroundBlack: {
    backgroundColor: 'black',
  },

  textPrimary: {
    color: 'white',
  },

  toggleButton: {
    position: 'absolute',
    top: 65,
    right: 0,
  },

  customHeader: {
    top: -100,
  },

  listView: {
    marginTop: 50,
    marginBottom: 30,
  },

  message: {
    top: 200,
  },
});

export default styles;
