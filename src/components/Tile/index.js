import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import ImageButton from '../ImageButton';
import styles from './styles';

const Tile = ({
  name,
  location,
  entry,
  thumbnail,
  onPress,
  type,
  showRemoveButton,
  onRemovePress,
  drag,
}) => {
  const layoutStyle = type === 'Grid' ? styles.grid : styles.list;
  return (
    <TouchableOpacity
      style={[styles.container, layoutStyle]}
      onPress={onPress}
      onLongPress={drag}>
      <ImageBackground
        source={thumbnail}
        style={[styles.imageBackground, layoutStyle]}
        blurRadius={5}>
        <View style={styles.backgroundDeFocus}>
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
          {showRemoveButton && (
            <ImageButton
              onPress={onRemovePress}
              source={require('../../assets/icons/remove.png')}
              buttonStyle={styles.removeButton}
            />
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Tile;
