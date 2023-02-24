import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR} from '../../../Styles/color';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Sejarah() {
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
          Sejarah DCC
        </Text>
        <TouchableOpacity
          style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{marginRight: wp(1.5), color: COLOR.BLACK}}>
            Lihat Semua
          </Text>
          <Icon
            name="chevron-right"
            size={wp(4)}
            style={{marginTop: wp(0.5)}}
            color={COLOR.BLACK}
          />
        </TouchableOpacity>
      </View>
      {/* Header End */}
      <View style={{marginLeft: wp(5), marginRight: wp(4)}}>
        <Text style={{color: COLOR.BLACK}}>
          {' '}
          Dipanegara Computer Club (DCC) terbentuk karena adanya ketidakpuasan
          dari sekelompok Mahasiswa STMIK Dipanegara akan sebuah sistem
          Pendidikan yang mereka geluti selama ini. Sehingga mereka berusaha
          untuk mencari dan terus mencari bentuk wadah yang mampu menampung
          kebutuhan akan tinjauan ke depan mereka tentang kebutuhan teknologi
          masa depan yang akan datang.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
