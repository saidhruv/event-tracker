/** @format */

import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Button from '../../components/Button';
import ErrorText from '../../components/ErrorText';
import Header from '../../components/Header';
import styles from './styles';

const NameEntryScreen = ({navigation}) => {
  const [value, onChangeText] = useState(null);
  const [error, changeErrorState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onPress = () => {
    setIsLoading(true);
    if (!value) {
      changeErrorState(true);
      setTimeout(() => changeErrorState(false), 6000);
      setIsLoading(false);
    } else {
      handleRedirect();
    }
  };

  const handleRedirect = async () => {
    try {
      const existingUsers =
        JSON.parse(await AsyncStorage.getItem('users')) || {};
      const index = Object.keys(existingUsers).findIndex(
        (user) => user === value,
      );
      if (!existingUsers) {
        existingUsers[value.trim()] = [];
        await AsyncStorage.setItem('users', JSON.stringify(existingUsers));
      } else if (index === -1) {
        existingUsers[value.trim()] = [];
        await AsyncStorage.setItem('users', JSON.stringify(existingUsers));
      }
      await AsyncStorage.setItem('currentUser', value.trim());
      setIsLoading(false);
      navigation.replace('EventListCompoundScreen');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={[styles.container, styles.backgroundBlack]}>
      <Header topText="Enter" middleText="Your" endText="Name" />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="here"
        autoCompleteType="off"
        placeholderTextColor="white"
        selectionColor="white"
      />
      <View style={styles.errorContainer}>
        {error && (
          <ErrorText styles={styles.error} delay={3000}>
            Please enter your name
          </ErrorText>
        )}
      </View>
      <Button
        label="Next"
        onPress={onPress}
        style={styles.button}
        isLoading={isLoading}
      />
    </View>
  );
};

export default NameEntryScreen;
