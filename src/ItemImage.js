import React from 'react';
import {View, Image, Text,StyleSheet, TouchableOpacity} from 'react-native';

export default ItemImage = ({data, onPressItem, isActive}) => {

  return (
    <TouchableOpacity style={styless.view} onPress={onPressItem}>
      <Image
        style={[styless.image, {borderColor: isActive ? 'red' : 'blue'}]}
        source={{uri: data.sourcee}}></Image>
      <Text style={styless.text}>{new Date().toString()}</Text>
    </TouchableOpacity>
  );
};
export const styless = StyleSheet.create({
  view: {
    
    width: 120,
    height: 120,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth:2,
    borderColor:'blue'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginTop: 10,
  },
});