import React, {useState, useEffect} from 'react';
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
import {images, fontSize} from '../constants';
import {icons} from '../constants';
import Icons from 'react-native-vector-icons//FontAwesome';
import {UIbutton} from '../button';
import {theme} from '../constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Moi man hinh la 1 component(funtion)
/*
//Viet theo kieu truyen thong
function welcome(props)
//props: cac dac diem cua man hinh do
{
    return <Text> This is Welcome Screen</Text>
}
*/
//tao ra 1 bien tham chieu den 1 function
function WelcomeScreen({navigation}) {
  //state => when a stage is changed => Ui reloaded
  //getter, setter
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Influencer',
      isSelected: true,
    },
    {
      name: 'Bussiness',
      isSelected: true,
    },
    {
      name: 'Indential',
      isSelected: true,
    },
  ]);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 100,
          //justifyContent:'center'
        }}>
        <View
          style={{
            height: 50,
            flex: 20,
            //backgroundColor: 'green',
          }}>
          <View
            style={{
              flexDirection: 'row', // các thành phần dàn hàng ngang
              justifyContent: 'flex-start', //căn giữa
              alignItems: 'center',
              height: 50,
            }}>
            <Image
              source={icons.fire}
              style={{
                width: 40,
                height: 40,
                marginStart: 10,
                marginRight: 5,
              }}
            />
            <Text style={{color: 'white', fontSize: fontSize.h1 + 5}}>
              {' '}
              Spotify Phếch{' '}
            </Text>
            <View style={{flex: 1}} />
            <Image
              source={icons.question}
              style={{
                width: 40,
                height: 40,
                justifyContent: 'flex-end',
                marginRight: 10,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 20,
            //backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 15}}>Chào mừng đến với</Text>

          <Text
            style={{
              color: 'white',
              fontSize: fontSize.h1 + 5,
              paddingTop: 5,
              fontWeight: 'bold',
            }}>
            Spotify Phếch
          </Text>

          <Text style={{color: 'white', fontSize: 15, paddingTop: 5}}>
            Lựa chọn loại tài khoản của bạn
          </Text>
        </View>

        <View
          style={{
            flex: 40,
          }}>
          {accountTypes.map(accountType => (
            <UIbutton
              onPress={() => {
                let newAccountTypes = accountTypes.map(eachAccountType => {
                  return {
                    ...eachAccountType,
                    isSelected: eachAccountType.name == accountType.name,
                  };
                });
                setAccountTypes(newAccountTypes);
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          ))}
        </View>

        <View
          style={{
            flex: 20,
            justifyContent: 'center',
          
           // backgroundColor: 'blue',
          }}>
          <UIbutton title={'LOGIN'.toUpperCase()}></UIbutton>

          <Text style={{color: 'white', fontSize: 15, paddingTop: 5, alignSelf:'center'}}>
            Lựa chọn loại tài khoản của bạn
          </Text>

          <Text style={{color: theme.primary, fontSize: 15, paddingTop: 5, alignSelf:'center',textDecorationLine: 'underline'}}>
            Đăng ký
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
/*
const WelcomeScreen = (props) => { //WCSR chi tham chieu khoi lenh nay
    //distructering an object

    // const - let (local variable) 
    let{x,y}=props
    const {person}=props
    const {name,age}= person
    const {products}= props
    //alert(props.y) //hien thi cac bien o index.js
    //alert(`x=${props.x}, y=${props.y}`) // hien thi chuoi x= , y=
    return <View style={{
        backgroundColor:'blue' ,
        color:'white'
        }}>
                <Text>Value of x={x}, Value of y={y}</Text>

                <Text>Name={name} age={age}</Text>
                {products.map(eachProduct => 
                <Text>
                    {eachProduct.product}, {eachProduct.year}
                    </Text>)}                         
                <Text>sum 2 and 3= {sum2num(2,3)}</Text>
            </View>
    
}
*/

export default WelcomeScreen; //export 1 thang dai dien
