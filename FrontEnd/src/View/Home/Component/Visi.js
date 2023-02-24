import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR} from '../../../Styles/color';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Visi() {
  return (
    <View
      style={{width: wp(100), height: wp(50), backgroundColor: COLOR.WHITE}}>
      {/* Header Start */}
      <View
        style={{
          padding: wp(2),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: COLOR.BLUE,
            fontSize: wp(4),
            fontWeight: 'bold',
            marginLeft: wp(5),
          }}>
          Visi
        </Text>
      </View>
      {/* Header End */}
      <View style={{marginLeft: wp(5), marginRight: wp(4)}}>
        <Text style={{color: COLOR.BLACK}}>
          Ikut menyukseskan proses belajar mengajar di kampus Universitas Dipa
          Makassar khususnya pada mata kuliah berbasis komputer, sebagai wadah
          untuk mengembangkan kemampuan dan keahlian Anggota DCC pada khususnya
          dan mahasiswa Universitas Dipa Makassar pada umumnya, dalam upaya
          pencapaian tujuan pendidikan.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
