import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'native-base';
import Stories from '../screenComponents/Stories';
import Posts from '../screenComponents/Posts';
import Ionic from 'react-native-vector-icons/Ionicons';


const Home = () => {
  return (
    <View style={{backgroundColor:'white',height:'100%'}}>
      <StatusBar backgroundColor='white' hidden/>
      <View
        style={{
          justifyContent:'space-between',
          flexDirection:'row',
          paddingHorizontal:15,
          alignItems:'center'
        }}
      >
        <FontAwesome name='plus-square-o' style={{ fontSize: 24 }} />
        <Text
          style={{ fontSize: 25, fontWeight: '500' }}
        >Instagram</Text>
        <Icon
          name="navigation"
          size={24}
        />
      </View>

      <ScrollView>
        <Stories />
        <Posts />
        <View style={{justifyContent:'center',alignItems:'center',padding:20}}> 
          <Ionic
            name='ios-reload-circle-sharp'
            style={{fontSize:60,opacity:0.2}}
          />
        </View>
      </ScrollView>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})