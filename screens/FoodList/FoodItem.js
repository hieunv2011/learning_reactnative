import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Colors,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
//doc du lieu tu module khac
import {isValidEmail, isValidPassword} from '../../utilities/vadilation';
import WelcomeScreen from '../WelcomeScreen';
import {sum2num} from '../../utilities/math';
import {images, fontSize} from '../../constants';
import {icons} from '../../constants';
import Icons from 'react-native-vector-icons//FontAwesome';
import {UIbutton} from '../../button';
import {theme} from '../../constants';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';


function _getColorfromStatus(status){

  if(status.trim() == 'opening soon'){
    return theme.green
  }
  else if(status.trim() == 'closing soon'){
    return theme.red
  }
  else if(status.trim() == 'coming soon'){
    return theme.orange }
  else if(status.trim() == 'coming soon'){
    return theme.red }
  /*
  return status.toUpperCase().trim() =='opening soon' ? theme.green:
  (status.trim() == 'closing soon'? theme.red :theme.orange
  )*/
}
function FoodItem(props){
    let {
      name,
      price,
      socialNetworks,
      status,
      url,
      onPress
      website}=props.food

    return(
        <TouchableOpacity
        onPress={onPress}
        style={{
          height: 150,
          flexDirection: 'row',
          //backgroundColor: 'red',
          paddingStart: 10,
          paddingTop: 20,
        }}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 15,
          }}
          source={{
            uri: 'https://cdn.tgdd.vn/2021/12/CookDish/cach-lam-bun-dau-mam-tom-ngon-ngat-ngay-an-mot-lan-la-ghien-avt-1200x675.jpg',
          }}
        />
        <View
          style={{
            flex: 1,
            //backgroundColor:'green',
            marginBottom: 20,
            marginRight: 15,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: fontSize.h1 - 2,
            }}>
            {name}
          </Text>
          <View style={{backgroundColor: 'black', height: 1}}></View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text> STATUS: </Text>
            <Text
              style={{
                color: _getColorfromStatus(status),
              }}>
              {status}
            </Text>
          </View>
          <Text> {price} </Text>
          <Text> Food type : Pizza </Text>
          <Text> {website} </Text>

          <View
            style={{flexDirection:'row'}}>
          {socialNetworks['facebook']!= undefined && 
          <Icons style={{paddingEnd: 5}} name='facebook' size={20} color={theme.inactive}></Icons>
          }
          {socialNetworks['instagram']!= undefined && 
          <Icons style={{paddingEnd: 5}} name='instagram' size={20} color={theme.inactive}></Icons>
          }
          </View>
        </View>
      </TouchableOpacity>
    )
}
export { FoodItem } ;