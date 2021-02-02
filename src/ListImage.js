import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import dataImage from '../data/data';
import ItemImage from './ItemImage';

export default ListImage = () => {
  const [itemSelected, setItemSelected] = useState({});

  useEffect(() => {
    console.log('itemSelected', itemSelected);
  }, [itemSelected]);



  const renderItemImage = ({item}) => {
    return (
      <ItemImage
        data={item}
        onPressItem={() => setItemSelected(item)}
        isActive={item.id == itemSelected.id}
      />
    );
  };


  return (
    <View style={styles.viewTong}>
      <FlatList
        data={dataImage}
        renderItem={renderItemImage}
        contentContainerStyle={styles.viewFlatList}
        horizontal={false}
        numColumns="3"
      />
      <View style={styles.viewImage}>
        <Image
          source={{
            uri: itemSelected.sourcee,
          }}
          style={styles.styleImage}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewTong: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  viewFlatList: {
    // backgroundColor: 'red',
    // height: 200
    width: '100%',
  },
  viewImage: {},
  styleImage: {
    width: '100%',
    height: 250,
  },
});
