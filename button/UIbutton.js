import React from 'react';
import {
  Text,
  View,
  Colors,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
//doc du lieu tu module khac

import {sum2num} from '../utilities/math';
import {images} from '../constants';
import {icons} from '../constants';
import Icons from 'react-native-vector-icons//FontAwesome';
import {theme} from '../constants';
function UIbutton(props) {
  const{onPress, title, isSelected} =  props
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        borderColor: theme.border,
        borderWidth: 2,
        height: 40,
        borderRadius: 5,
        marginHorizontal: 30,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected == true ? 'white':null,
        flexDirection: 'row',
      }}>
       {isSelected== true &&<Icons
        name="home"
        style={{color: 'green', position: 'absolute', left: 10}}
        size={20} />}
      <Text
        style={{
          fontSize: 20,
          color: isSelected ==true ? theme.primary : 'white'
        }}>{title}</Text>
    </TouchableOpacity>
  );
}
export default UIbutton;
