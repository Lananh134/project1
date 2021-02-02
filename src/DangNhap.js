import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import {colorPrimary, btnPink} from '../data/color';

const DangNhap = () => {
    return (
      <View style={styles.wrapView}>
        <View style={styles.wrapViewImage}>
          <Image
            style={styles.wrapImage}
            source={require('../image/logo.png')}></Image>
        </View>

        <View style={styles.wrapViewNhap}>
          <TextInput
            placeholder="TaiKhoan"
            placeholderTextColor="#888"
            style={styles.warpTextInput}
          />
          <TextInput
            placeholder="Matkhau"
            placeholderTextColor="#888"
            style={styles.warpTextInput}
          />
          <TouchableOpacity style={styles.wrapTouch}>
              <Text>Dang Nhap</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  wrapView: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#FF9999',
  },
  wrapViewImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wrapViewNhap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapImage: {
    width: 200,
    height: 200,
  },
  warpTextInput: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFF',
    margin:7
  },
  wrapTouch: {
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    height: 43,
    borderColor: '#FFF',
    margin:10
  },
});

export default DangNhap;