/** @format */

import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },

  backgroundBlack: {
    backgroundColor: 'black',
  },

  safeAreaView: {
    flex: 1,
  },
});

export default styles;
