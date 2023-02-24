import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR} from '../../../Styles/color';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Menu() {
  const activity = [
    {
      title: 'Secretary',
      image: require('./Icon/notes.png'),
      color: COLOR.BLUE,
      route: 'Secretary',
    },
    {
      title: 'Tresurer',
      image: require('./Icon/accounting.png'),
      color: COLOR.BLUE,
      route: 'Treasurer',
    },
    {
      title: 'Data Anggota',
      image: require('./Icon/data-protection.png'),
      color: COLOR.BLUE,
      route: 'DataAngggota',
    },
    {
      title: 'Data Calon Anggota',
      image: require('./Icon/customer.png'),
      color: COLOR.BLUE,
      route: 'CalonAnggota',
    },
  ];
  const organization = [
    {
      title: 'Manajemen Web',
      image: require('./Icon/www.png'),
      color: COLOR.BLUE,
      route: 'ManajemenWeb',
    },
    {
      title: 'Organization',
      image: require('./Icon/organization-chart.png'),
      color: COLOR.BLUE,
      route: 'Organization',
    },
    {
      title: 'Kepanitiaan',
      image: require('./Icon/goal.png'),
      color: COLOR.BLUE,
      route: 'Kepanitian',
    },
    {
      title: 'Lainnya',
      image: require('./Icon/other.png'),
      color: COLOR.BLUE,
      route: 'Lainnya',
    },
  ];
  return (
    <View style={[styles.ContainerMain]}>
      <View style={{flexDirection: 'row'}}>
        {/* Activity 1 Start */}
        {activity.map((item, index) => {
          return (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: wp(25),
              }}
              key={index}>
              <View
                style={{
                  height: wp(10),
                  width: wp(10),
                  backgroundColor: item.color,
                  borderRadius: wp(20),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{height: wp(7), width: wp(7)}}
                />
              </View>
              <Text style={{fontSize: wp(2.5), color: COLOR.BLACK}}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
        {/* Activity 1 End */}
      </View>
      {/* line */}
      <View style={{flexDirection: 'row', marginTop: wp(5)}}>
        {/* organization 2 Start */}
        {organization.map((item, index) => {
          return (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: wp(25),
              }}
              key={index}>
              <View
                style={{
                  height: wp(10),
                  width: wp(10),
                  backgroundColor: item.color,
                  borderRadius: wp(20),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{height: wp(7), width: wp(7)}}
                />
              </View>
              <Text style={{fontSize: wp(2.5), color: COLOR.BLACK}}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
        {/* organization 2 End */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerMain: {
    width: wp(100),
    height: hp(20),
    backgroundColor: COLOR.WHITE,
    alignItems: 'flex-start',
    bottom: wp(3),
    paddingTop: wp(2),
  },
});
