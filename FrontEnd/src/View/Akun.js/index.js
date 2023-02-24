import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import React from 'react';
import { RadioButton } from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


export default function Accouunt() {

  const [value, setValue] = React.useState('first');


  return (
  <ScrollView><View style={{ flex: wp(1) }}>
    <View style={{ alignItems:'center', paddingTop:wp(20), paddingBottom: wp(10) }}>
      <View style={{ flexDirection:'row' }}>
      <Image source={require('./../../Assets/lili.jpeg')} style={{ width: wp(40), height: wp(40), borderRadius: wp(40/2) }}></Image>
      <TouchableOpacity><Icon name="camera" size={wp(7)} color="#1f7ed1" style={{ backgroundColor:'#F4F4F4', padding:wp(3), height:wp(14) ,borderRadius: wp(50/2) , marginTop:wp(28), marginLeft:wp(-10)}} /></TouchableOpacity>
      </View>
      
    </View>
    <View style={{ paddingLeft:wp(8), paddingBottom:wp(7) }}>
      <Text style={{ fontSize:wp(5), color:'black' }}>Stambuk</Text>
      <View style={{ flexDirection:'row' }}>
      <Text style={{ width:wp('76%'), height:wp(10), fontWeight:'bold', paddingTop:wp(2), fontSize:wp(5) }}>212040</Text>
      <TouchableOpacity><Icon name="edit" size={wp(6)} color="#1f7ed1" /></TouchableOpacity>
      </View>
      <View style={{ flex:1, borderBottomWidth:1, borderBottomColor:'grey', width:wp('82%') }} />
    </View>
    <View style={{ paddingLeft:wp(8), paddingBottom:wp(7) }}>
      <Text style={{ fontSize:wp(5), color:'black' }}>Nama Lengkap</Text>
      <View style={{ flexDirection:'row' }}>
      <Text style={{ width:wp('76%'), height:wp(10), fontWeight:'bold', paddingTop:wp(2), fontSize:wp(5) }}>Muhammad Ali Ferdiansyah</Text>
      <TouchableOpacity><Icon name="edit" size={wp(6)} color="#1f7ed1" /></TouchableOpacity>
      </View>
      <View style={{ flex:1, borderBottomWidth:1, borderBottomColor:'grey', width:wp('82%') }} />
    </View>
    <View style={{ paddingLeft:wp(8), paddingBottom:wp(7) }}>
      <Text style={{ fontSize:wp(5), color:'black' }}>Nomor Anggota</Text>
      <View style={{ flexDirection:'row' }}>
      <Text style={{ width:wp('76%'), height:wp(10), fontWeight:'bold', paddingTop:wp(2), fontSize:wp(5) }}>DCC.12IE.AK4.209</Text>
      <TouchableOpacity><Icon name="edit" size={wp(6)} color="#1f7ed1" /></TouchableOpacity>
      </View>
      <View style={{ flex:1, borderBottomWidth:1, borderBottomColor:'grey', width:wp('82%') }} />
    </View>
    <View style={{ paddingLeft:wp(8), paddingBottom:wp(7) }}>
      <Text style={{ fontSize:wp(5), color:'black' }}>Angkatan</Text>
      <View style={{ flexDirection:'row' }}>
      <Text style={{ width:wp('76%'), height:wp(10), fontWeight:'bold', paddingTop:wp(2), fontSize:wp(5) }}>25</Text>
      <TouchableOpacity><Icon name="edit" size={wp(6)} color="#1f7ed1" /></TouchableOpacity>
      </View>
      <View style={{ flex:1, borderBottomWidth:1, borderBottomColor:'grey', width:wp('82%') }} />
    </View>
    <View style={{ paddingLeft:wp(8), paddingBottom:wp(7) }}>
      <Text style={{ fontSize:wp(5), color:'black' }}>Tempat Lahir</Text>
      <View style={{ flexDirection:'row' }}>
      <Text style={{ width:wp('76%'), height:wp(10), fontWeight:'bold', paddingTop:wp(2), fontSize:wp(5) }}>Depok</Text>
      <TouchableOpacity><Icon name="edit" size={wp(6)} color="#1f7ed1" /></TouchableOpacity>
      </View>
      <View style={{ flex:1, borderBottomWidth:1, borderBottomColor:'grey', width:wp('82%') }} />
    </View>
    <View style={{ paddingLeft:wp(8), paddingBottom:wp(7) }}>
    <Text style={{ fontSize:wp(5), color:'black' }}>Tanggal Lahir</Text>
      <View style={{ flexDirection:'row' }}>
      <Text style={{ width:wp('76%'), height:wp(10), fontWeight:'bold', paddingTop:wp(2), fontSize:wp(5) }}>06-September-2000</Text>
      <TouchableOpacity><Icon name="calendar" size={wp(6)} color="#1f7ed1" /></TouchableOpacity>
      </View>    
      <View style={{ flex:1, borderBottomWidth:1, borderBottomColor:'grey', width:wp('82%') }} />
    </View>
    <View style={{ paddingLeft:wp(8), paddingBottom:wp(7) }}>
      <Text style={{ fontSize:wp(5), color:'black' }}>Jenis Kelamin</Text>

      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={{ flexDirection:'row',paddingTop:wp(2) ,paddingBottom:wp(1)}}>
      <View style={{ flexDirection:'row' }}>
        <RadioButton value="laki-laki" color='#1f7ed1' />
        <Text style={{ paddingTop:wp(2) , fontSize:wp(5), fontWeight:'bold',paddingRight:10 }}>Laki-laki</Text>
      </View>
      <View style={{ flexDirection:'row' }}>
        <RadioButton value="perempuan" color='#1f7ed1' />
        <Text style={{ paddingTop:wp(2) , fontSize:wp(5), fontWeight:'bold' }}>Perempuan</Text>
      </View>
      </View>
    </RadioButton.Group>
      <View style={{ flex:1, borderBottomWidth:1, borderBottomColor:'grey', width:wp('82%') }} />
    </View>
    <View style={{ paddingLeft:wp(8), paddingBottom:wp(7) }}>
      <Text style={{ fontSize:wp(5), color:'black' }}>Nomor Telepon</Text>
      <View style={{ flexDirection:'row' }}>
      <Text style={{ width:wp('76%'), height:wp(10), fontWeight:'bold', paddingTop:wp(2), fontSize:wp(5) }}>081317255777</Text>
      <TouchableOpacity><Icon name="edit" size={wp(6)} color="#1f7ed1" /></TouchableOpacity>
      </View>
      <View style={{ flex:1, borderBottomWidth:1, borderBottomColor:'grey', width:wp('82%') }} />
    </View>
    <View style={{ paddingLeft:wp(8), paddingBottom:wp(7) }}>
      <Text style={{ fontSize:wp(5), color:'black' }}>Email</Text>
      <View style={{ flexDirection:'row' }}>
      <Text style={{ width:wp('76%'), height:wp(10), fontWeight:'bold', paddingTop:wp(2), fontSize:wp(5) }}>zailyanzali@gmail.com</Text>
      <TouchableOpacity><Icon name="edit" size={wp(6)} color="#1f7ed1" /></TouchableOpacity>
      </View>
      <View style={{ flex:1, borderBottomWidth:1, borderBottomColor:'grey', width:wp('82%') }} />
    </View>
    <View style={{ paddingLeft:wp(8), paddingBottom:wp(7) }}>
      <Text style={{ fontSize:wp(5), color:'black' }}>Alamat</Text>
      <View style={{ flexDirection:'row' }}>
      <Text style={{ width:wp('76%'), height:wp(10), fontWeight:'bold', paddingTop:wp(2), fontSize:wp(5) }}>Gowa, Pallangga</Text>
      <TouchableOpacity><Icon name="edit" size={wp(6)} color="#1f7ed1" /></TouchableOpacity>
      </View>
      <View style={{ flex:1, borderBottomWidth:1, borderBottomColor:'grey', width:wp('82%') }} />
    </View>
    <View style={{ paddingLeft:wp(8), paddingBottom:wp(7) }}>
      <Text style={{ fontSize:wp(5), color:'black' }}>Kota</Text>
      <View style={{ flexDirection:'row' }}>
      <Text style={{ width:wp('76%'), height:wp(10), fontWeight:'bold', paddingTop:wp(2), fontSize:wp(5) }}>Makassar</Text>
      <TouchableOpacity><Icon name="edit" size={wp(6)} color="#1f7ed1" /></TouchableOpacity>
      </View>
      <View style={{ flex:1, borderBottomWidth:1, borderBottomColor:'grey', width:wp('82%') }} />
    </View>
    <View style={{ paddingLeft:wp(8), paddingBottom:wp(7) }}>
    <TouchableOpacity><Text style={{ color:"#1f7ed1",textAlign:'right',marginRight:wp(10) }}>Ganti Password</Text></TouchableOpacity>
    </View>
    <View style={{ alignItems:'center', paddingBottom:10 }}>
    <TouchableOpacity style={{ backgroundColor:"#1f7ed1", borderRadius:wp(3), width:wp('60%'), height:wp(12) }}><Text style={{ color:'white',textAlign:'center',fontWeight:'bold',paddingTop:wp(3) }}>Keluar</Text></TouchableOpacity>
    </View>


    </View></ScrollView>
  );
}

const styles = StyleSheet.create({});
