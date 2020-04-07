/** @format */

import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  headerStyle: {
    color: 'white',
    fontSize: 150,
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-UltraLight' : 'sans-serif-thin',
    fontWeight: '100',
    textTransform: 'lowercase',
    position: 'absolute',
    display: 'flex',
    flex: 1,
    flexWrap: 'nowrap',
  },

  textPrimary: {
    opacity: 0.2,
    top: -70,
  },

  textSecondary: {
    opacity: 0.6,
  },

  textTertiary: {
    opacity: 1,
    top: 70,
  },
});

export default styles;
