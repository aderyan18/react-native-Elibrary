import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR} from '../../Styles/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu from './Component/Menu';
import Sejarah from './Component/Sejarah';
import Visi from './Component/Visi';

export default function Home() {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ImageBackground
          style={[styles.Image]}
          source={require('../../Assets/tes.jpg')}
        />
        {/* Profile Start */}
        <View style={[styles.ProfileContainer]}>
          {/* Icon Start */}
          <View style={[styles.ContentPicture]}>
            <Image
              source={require('../../Assets/bulat.png')}
              style={{width: wp(9), height: hp(5), borderRadius: wp(3)}}
            />
          </View>
          {/* Icon End */}
          <TouchableOpacity
            style={{
              width: wp(80),
              height: hp(5),
              backgroundColor: COLOR.WHITE,
              justifyContent: 'space-between',
              padding: wp(2),
              flexDirection: 'row',
            }}>
            <Text
              style={{fontSize: wp(4), fontWeight: 'bold', color: COLOR.BLACK}}>
              Muh. Najwar Ramadhan
            </Text>
            <Icon name="bell" color={COLOR.BLUE} size={wp(5)} />
          </TouchableOpacity>
        </View>
        {/* Profile End */}
        <View>
          <Menu />
        </View>
        <View>
          <Sejarah />
        </View>
        <View style={{top: wp(2)}}>
          <Visi />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: wp(100),
    height: hp(30),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ProfileContainer: {
    backgroundColor: COLOR.WHITE,
    width: wp(90),
    height: hp(7),
    borderRadius: wp(4),
    alignSelf: 'center',
    bottom: hp(2.5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  ContentPicture: {
    width: wp(10),
    height: hp(5),
    // backgroundColor: COLOR.BLUE,
    borderRadius: wp(3),
    alignItems: 'center',
  },
});
