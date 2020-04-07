/** @format */

import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import Header from '../../components/Header';
import EventList from '../../constants/EventList';
import styles from './styles';
import ImageButton from '../../components/ImageButton';
import Tile from '../../components/Tile';

const EventListScreen = ({navigation}) => {
  const [title, onToggleTitle] = useState('List');

  const onPress = () => {
    if (title === 'List') {
      onToggleTitle('Grid');
    } else {
      onToggleTitle('List');
    }
  };

  return (
    <View style={[styles.container, styles.backgroundBlack]}>
      <View style={styles.toggleableHeader}>
        <Header endText={title} style={styles.customHeader} />
        <ImageButton
          source={require('../../assets/icons/toggle.png')}
          onPress={onPress}
          buttonStyle={styles.toggleButton}
        />
      </View>
      <FlatList
        data={EventList}
        renderItem={({item}) => (
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
          />
        )}
        numColumns={title === 'List' ? 1 : 2}
        key={title === 'List' ? 1 : 2}
        keyExtractor={(item, index) => index.toString()}
        style={styles.listView}
      />
    </View>
  );
};

export default EventListScreen;
