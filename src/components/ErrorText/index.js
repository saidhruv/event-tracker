/** @format */

import React, {useState, useEffect} from 'react';
import {Animated, Text} from 'react-native';

const ErrorText = ({children, delay, styles}) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        delay: delay,
        useNativeDriver: true,
      }),
    ]).start();
  });

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      <Text style={styles}>{children}</Text>
    </Animated.View>
  );
};

export default ErrorText;
