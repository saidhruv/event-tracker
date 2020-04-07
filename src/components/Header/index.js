/** @format */

import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Header = ({topText, middleText, endText, style}) => (
  <View style={[styles.container, style]}>
    <Text
      style={[styles.headerStyle, styles.textPrimary]}
      numberOfLines={1}
      ellipsizeMode="clip">
      {topText}
    </Text>
    <Text
      style={[styles.headerStyle, styles.textSecondary]}
      numberOfLines={1}
      ellipsizeMode="clip">
      {middleText}
    </Text>
    <Text
      style={[styles.headerStyle, styles.textTertiary]}
      numberOfLines={1}
      ellipsizeMode="clip">
      {endText}
    </Text>
  </View>
);

export default Header;
