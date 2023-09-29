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
import {isValidEmail, isValidPassword} from '../utilities/vadilation';
import WelcomeScreen from './WelcomeScreen';
import {sum2num} from '../utilities/math';
import {images, fontSize} from '../constants';
import {icons} from '../constants';
import Icons from 'react-native-vector-icons//FontAwesome';
import {UIbutton} from '../button';
import {theme} from '../constants';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function login({navigation}) {
  const Stack = createNativeStackNavigator();
  const [keyboardIsShow, setkeyboardIsShown] = useState(false);
  const [errorEmail, seterrorEmail] = useState('');
  const [errorPassword, seterrorPassword] = useState('');
  //state luu tru email, password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValidOk =() => email.length >0
                      && password.length >0
                      && isValidEmail(email) ==true
                      && isValidPassword(password) ==true
  useEffect(() => {
    //componentdidMount
    Keyboard.addListener('keyboardDidShow', () => {
      //alert('keyboardDidShow')
      setkeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      //alert('keyboardDidHide')
      setkeyboardIsShown(false);
    });

    //ham use Effect su dung khi ban phim day cac thanh phan o duoi len
  });
  return (
<NavigationContainer>


    <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 30,
          height: 200,
          flexDirection: 'row',
          paddingTop: 50,
          //backgroundColor:'red',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            fontSize: fontSize.h1 + 5,
            color: 'black',
            fontWeight: 'bold',
            width: '50%',
            paddingLeft: 10,
          }}>
          Already had an Account ?
        </Text>
        <Image
          source={images.computer}
          style={{
            height: 120,
            width: 120,
            alignSelf: 'center',
            paddingLeft: 10,
          }}
        />
      </View>

      <View
        style={{
          flex: 30,
        }}>
        {/* Gmail*/}
        <View>
          <Text
            style={{
              fontSize: fontSize.h2,
              color: theme.primary,
            }}>
            Gmail or Username
          </Text>
          <TextInput
            onChangeText={text => {
              /*   if (isValidEmail(text)==false){
                seterrorEmail('Email not incorrect format')
              }
              else{
                seterrorEmail('')
              } */

              seterrorEmail(
                isValidEmail(text) == true ? '': 'Định dạng email sai',
              );

              setEmail(text);
            }}
            placeholder="example@gmail.com"
            placeholderTextColor={'rgba(192,192,192,0.6)'}
          />
          <View
            style={{
              height: 1,
              backgroundColor: theme.primary,
              width: '100%',
              marginBottom: 10,
              marginHorizontal: 10,
              alignSelf: 'center',
            }}
          />
          <Text style={{color: 'red'}}>{errorEmail}</Text>
        </View>
        {/* pass*/}
        <View>
          <Text
            style={{
              fontSize: fontSize.h2,
              color: theme.primary,
            }}>
            Password
          </Text>
          <TextInput
            onChangeText={text => {
              /*   if (isValidEmail(text)==false){
                seterrorEmail('Email not incorrect format')
              }
              else{
                seterrorEmail('')
              } */

              seterrorPassword(
                isValidPassword(text) == true
                  ? ' '
                  : 'Password not in correct format',
              );

              setPassword(text);
            }}
            secureTextEntry={true}
            placeholder="example@gmail.com"
            placeholderTextColor={'rgba(192,192,192,0.6)'}
          />
          <View
            style={{
              height: 1,
              backgroundColor: theme.primary,
              width: '100%',
              marginBottom: 10,
              marginHorizontal: 10,
              alignSelf: 'center',
            }}
          />
          <Text style={{color: 'red'}}>{errorPassword}</Text>
        </View>
      </View>

      {/* Hai nút*/}

      {keyboardIsShow == false && (
        <View
          style={{
            flex: 30,
            height: 500,
            alignSelf: 'center',
            paddingTop: 30,
          }}>
          <TouchableOpacity
            disabled={isValidOk()==false}
            onPress={() => {
              // alert(`Email = ${email}, Password =${password}`);
              navigation.navigate('WelcomeScreen')
            }}
            style={{
              height: 50,
              width: 150,
              borderRadius: 20,
              justifyContent: 'center',
              backgroundColor: isValidOk()== true ? theme.primary: theme.inactive ,
            }}>
            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: fontSize.h3,
                }}>
                LOGIN
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  color: theme.primar,
                  fontSize: fontSize.h6 + 2,
                  paddingTop: 5,
                }}>
                New user? Register now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
 {keyboardIsShow == false && (
      <View
        style={{
          flex: 20,
          //backgroundColor: 'red'
        }}>
        <View
          style={{
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View style={{height: 1, backgroundColor: 'black', flex: 1}}></View>
          <Text
            style={{
              padding: 8,
              fontSize: fontSize.h6,
              color: 'black',
              alignSelf: 'center',
              marginHorizontal: 5,
            }}>
            {' '}
            Use other methods ?{' '}
          </Text>
          <View style={{height: 1, backgroundColor: 'black', flex: 1}}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Icons name="facebook" size={35} color={'blue'} />
          <View style={{width: 20}}></View>
          <Icons name="google" size={35} color={'red'} />
        </View>
      </View> 
 )}
    </KeyboardAvoidingView>


</NavigationContainer>        
  );
}
export default login;
