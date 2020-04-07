/** @format */

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import styles from './styles';

const Button = ({label, onPress, style, isLoading}) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={onPress}
    activeOpacity={0.9}
    disabled={isLoading}>
    {isLoading ? (
      <Progress.Bar
        width={100}
        height={4}
        indeterminate={true}
        color="#000000"
        unfilledColor="#00000040"
        borderWidth={0}
        useNativeDriver={true}
        borderRadius={0}
        animationType="timing"
      />
    ) : (
      <Text style={styles.buttonText}>{label}</Text>
    )}
  </TouchableOpacity>
);

export default Button;
