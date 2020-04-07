/* eslint-disable react-hooks/exhaustive-deps */
/** @format */

import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect, useContext} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ImageButton from '../../components/ImageButton';
import {CounterContext} from '../../components/CounterContextProvider';
import styles from './styles';

const EventDetailsScreen = ({
  route: {
    params: {id, name, thumbnail, location, entry},
  },
  navigation,
}) => {
  const [buttonText, changeButtonText] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useContext(CounterContext);

  useEffect(() => {
    handleCheck();
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleCheck = async () => {
    try {
      setIsLoading(true);
      const currentUser = await AsyncStorage.getItem('currentUser');
      const existingUsers = JSON.parse(await AsyncStorage.getItem('users'));
      const userTrackedEvents = existingUsers[currentUser];
      const hasEvent = userTrackedEvents.findIndex((eventId) => eventId === id);
      if (hasEvent > -1) {
        changeButtonText('Untrack');
      } else {
        changeButtonText('Track');
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onPress = async () => {
    try {
      setIsLoading(true);
      const currentUser = await AsyncStorage.getItem('currentUser');
      const existingUsers = JSON.parse(await AsyncStorage.getItem('users'));
      const userTrackedEvents = existingUsers[currentUser];
      const hasEvent = userTrackedEvents.findIndex((eventId) => eventId === id);
      if (hasEvent > -1) {
        changeButtonText('Track');
        userTrackedEvents.splice(hasEvent, 1);
        decrement();
      } else {
        changeButtonText('Untrack');
        userTrackedEvents.push(id);
        increment();
      }
      existingUsers[currentUser] = userTrackedEvents;
      await AsyncStorage.setItem('users', JSON.stringify(existingUsers));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={thumbnail}
      style={[styles.imageBackground]}
      blurRadius={5}>
      <View style={styles.backgroundDeFocus}>
        <View style={styles.toggleableHeader}>
          <ImageButton
            source={require('../../assets/icons/back.png')}
            onPress={() => navigation.pop()}
            buttonStyle={styles.toggleButton}
          />
          <Header endText="Details" style={styles.customHeader} />
        </View>
        <View style={styles.shadowBox}>
          <Image
            source={thumbnail}
            style={styles.mainImage}
            resizeMethod="resize"
          />
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.name]} numberOfLines={1}>
              {name}
            </Text>
            <Text style={[styles.text, styles.location]} numberOfLines={1}>
              {location}
            </Text>
            <Text style={[styles.text, styles.entry]} numberOfLines={1}>
              {entry}
            </Text>
          </View>
          <Button
            label={buttonText}
            onPress={onPress}
            style={styles.button}
            isLoading={isLoading}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default EventDetailsScreen;
