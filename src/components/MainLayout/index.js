/** @format */

import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import {CounterContextProvider} from '../CounterContextProvider';
import styles from './styles';

const MainLayout = ({children}) => (
  <CounterContextProvider>
    <StatusBar barStyle="light-content" backgroundColor="black" />
    <SafeAreaView style={[styles.backgroundBlack, styles.safeAreaView]}>
      <View style={[styles.container, styles.backgroundBlack]}>{children}</View>
    </SafeAreaView>
  </CounterContextProvider>
);

export default MainLayout;
