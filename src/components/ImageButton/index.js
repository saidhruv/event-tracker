/** @format */

import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const ImageButton = ({onPress, buttonStyle, imageStyle, source}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      activeOpacity={0.9}>
      <Image
        style={[styles.image, imageStyle]}
        source={source}
        tintColor="white"
      />
    </TouchableOpacity>
  );
};

export default ImageButton;
