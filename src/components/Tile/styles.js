/** @format */

import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 3,
  },

  imageBackground: {
    height: 200,
  },

  grid: {
    flex: 0.5,
  },

  list: {
    flex: 1,
  },

  backgroundDeFocus: {
    backgroundColor: '#00000080',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  textContainer: {
    flexDirection: 'column',
    margin: 5,
  },

  text: {
    color: 'white',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-UltraLight' : 'sans-serif-light',
    fontWeight: '300',
  },

  name: {
    fontSize: 21,
  },

  location: {
    fontSize: 18,
  },

  entry: {
    fontSize: 15,
  },

  removeButton: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
});

export default styles;
