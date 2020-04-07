/** @format */

import {StyleSheet, Platform, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },

  backgroundDeFocus: {
    backgroundColor: '#000000a0',
    display: 'flex',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  toggleableHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },

  toggleButton: {
    position: 'absolute',
    top: 50,
    left: 0,
  },

  customHeader: {
    top: -100,
    left: 40,
  },

  textContainer: {
    flexDirection: 'column',
    padding: 5,
    width: width - 40,
    backgroundColor: 'black',
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

  button: {
    width: width - 40,
  },

  shadowBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },

  mainImage: {
    height: height / 2.5,
    width: width - 40,
  },
});

export default styles;
