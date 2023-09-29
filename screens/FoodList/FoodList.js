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
  ScrollView,
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
import {FoodItem} from "../FoodList/FoodItem"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
function FoodList(props) {
  //dannh sach thuc an
  const [foods, SetFoods] = useState([
    {
      name: 'Bun dau mam tom long me thit lon thit ga thit trau thit bo thit cho',
      status: 'opening soon',
      url: 'https://cdn.tgdd.vn/2021/12/CookDish/cach-lam-bun-dau-mam-tom-ngon-ngat-ngay-an-mot-lan-la-ghien-avt-1200x675.jpg',
      price: 123.56,
      website: 'https://youtube.com',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/hieukirin/?locale=vi_VN',
          instagram: 'https://www.facebook.com/hieukirin/?locale=vi_VN',
          twitter: 'https://www.facebook.com/hieukirin/?locale=vi_VN',
        },
      ],
    },
    {
      name: 'Bun bo ga lon vit ngan',
      status: 'opening now',
      url: 'https://cdn.tgdd.vn/2021/12/CookDish/cach-lam-bun-dau-mam-tom-ngon-ngat-ngay-an-mot-lan-la-ghien-avt-1200x675.jpg',
      price: 123.56,
      website: 'https://youtube.com',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/hieukirin/?locale=vi_VN',
          instagram: 'https://www.facebook.com/hieukirin/?locale=vi_VN',
          twitter: 'https://www.facebook.com/hieukirin/?locale=vi_VN',
        },
      ],
    },

    {
      name: 'Bun bo',
      status: 'closing soon',
      url: 'https://cdn.tgdd.vn/2021/12/CookDish/cach-lam-bun-dau-mam-tom-ngon-ngat-ngay-an-mot-lan-la-ghien-avt-1200x675.jpg',
      price: 123.56,
      website: 'https://youtube.com',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/hieukirin/?locale=vi_VN',
          instagram: 'https://www.facebook.com/hieukirin/?locale=vi_VN',
          twitter: 'https://www.facebook.com/hieukirin/?locale=vi_VN',
        },
      ],
    },
    {
      name: 'Bun bo',
      status: 'closing soon',
      url: 'https://cdn.tgdd.vn/2021/12/CookDish/cach-lam-bun-dau-mam-tom-ngon-ngat-ngay-an-mot-lan-la-ghien-avt-1200x675.jpg',
      price: 123.56,
      website: 'https://youtube.com',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/hieukirin/?locale=vi_VN',
          instagram: 'https://www.facebook.com/hieukirin/?locale=vi_VN',
          twitter: 'https://www.facebook.com/hieukirin/?locale=vi_VN',
        },
      ],
    },
  ]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>

      <View>
      <ScrollView>
        {foods.map(eachFood=>
          <FoodItem food={eachFood}/>
        )}
      </ScrollView>
      </View>
     
    </View>
  );
}
export default FoodList;
