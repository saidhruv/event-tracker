/** @format */

import AsyncStorage from '@react-native-community/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {CounterContext} from '../../components/CounterContextProvider';
import Header from '../../components/Header';
import Tile from '../../components/Tile';
import EventList from '../../constants/EventList';
import styles from './styles';

const TrackingViewScreen = ({navigation}) => {
  const [count, setCount] = useContext(CounterContext);
  const [userTrackedEvents, changeUserTrackedEvents] = useState([]);

  useEffect(() => {
    getFilteredData();
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const getFilteredData = async () => {
    try {
      const currentUser = await AsyncStorage.getItem('currentUser');
      const existingUsers = JSON.parse(await AsyncStorage.getItem('users'));
      const userTrackedEventIds = existingUsers[currentUser];
      const userTrackedEventsOrder = [];
      userTrackedEventIds.map((id) => {
        userTrackedEventsOrder.push(EventList.find((event) => event.id === id));
      });
      changeUserTrackedEvents(userTrackedEventsOrder);
    } catch (error) {
      console.log(error);
    }
  };

  const changeOrder = async (data) => {
    try {
      const currentUser = await AsyncStorage.getItem('currentUser');
      const existingUsers = JSON.parse(await AsyncStorage.getItem('users'));
      const newDataOrder = data.map((event) => event.id);
      existingUsers[currentUser] = newDataOrder;
      await AsyncStorage.setItem('users', JSON.stringify(existingUsers));
      increment();
    } catch (error) {
      console.log(error);
    }
  };

  const removeTracking = async (index) => {
    try {
      const currentUser = await AsyncStorage.getItem('currentUser');
      const existingUsers = JSON.parse(await AsyncStorage.getItem('users'));
      const userTrackedEventIds = existingUsers[currentUser];
      userTrackedEventIds.splice(index, 1);
      const userTrackedEventsOrder = [];
      userTrackedEventIds.map((id) => {
        userTrackedEventsOrder.push(EventList.find((event) => event.id === id));
      });
      existingUsers[currentUser] = userTrackedEventIds;
      changeUserTrackedEvents(userTrackedEventsOrder);
      await AsyncStorage.setItem('users', JSON.stringify(existingUsers));
      decrement();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.container, styles.backgroundBlack]}>
      <View style={styles.toggleableHeader}>
        <Header endText="Tracking" style={styles.customHeader} />
      </View>
      {!userTrackedEvents.length ? (
        <Header
          topText="No"
          middleText="Events"
          endText="Tracked"
          style={styles.message}
        />
      ) : (
        <DraggableFlatList
          data={userTrackedEvents}
          renderItem={({item, index, drag}) => (
            <Tile
              name={item.EventName}
              thumbnail={item.EventThumbnail}
              location={item.Location}
              entry={item.EntryFee}
              onPress={() =>
                navigation.navigate('EventDetailsCompoundScreen', {
                  screen: 'EventDetailsScreen',
                  params: {
                    id: item.id,
                    name: item.EventName,
                    thumbnail: item.EventThumbnail,
                    location: item.Location,
                    entry: item.EntryFee,
                  },
                })
              }
              showRemoveButton
              onRemovePress={() => removeTracking(index)}
              drag={drag}
            />
          )}
          keyExtractor={(item, index) => `draggable-item-${item.id}`}
          style={styles.listView}
          onDragEnd={({data}) => {
            changeUserTrackedEvents(data);
            changeOrder(data);
          }}
          activationDistance={10}
        />
      )}
    </View>
  );
};

export default TrackingViewScreen;
