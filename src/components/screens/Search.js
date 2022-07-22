import { StatusBar, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'native-base'
import SearchBox from '../screenComponents/SearchBox'
import SearchContent from '../screenComponents/SearchContent'
import Ionic from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather'

const Search = () => {

  const [image, setImage] = React.useState(null);

  const getData = (data) => {
    setImage(data);
  }

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'white', position: 'relative' }}>
      <ScrollView>
        <SearchBox />
        <SearchContent data={getData} />
      </ScrollView>
      {
        image ?
          (
            <View style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100%', backgroundColor: 'rgba(52,52,52,0.7)' }}>
              <StatusBar backgroundColor='#525252' barStyle='dark-content' />
              <View style={{
                position: 'absolute',
                top: windowHeight / 6,
                left: windowWidth / 18,
                backgroundColor: 'white',
                width: 350,
                height: 465,
                borderRadius: 15,
                zIndex: 1,
                elevation: 50
              }}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                }}>
                  <Image source={require('../../storage/images/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg')} style={{ width: 30, height: 30, borderRadius: 100 }} />
                  <View style={{ paddingLeft: 8 }}>
                    <Text style={{ fontSize: 12, fontWeight: '600' }}>the_anonymouss_guy</Text>
                  </View>
                </View>
                <Image source={image} style={{ width: '100%', height: '80%' }} />
                <View
                  style={{
                    justifyContent: 'space-around',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 8,
                  }}>
                  <Ionic name="ios-heart-outline" style={{ fontSize: 26 }} />
                  <Ionic name="ios-person-circle-outline" style={{ fontSize: 26 }} />
                  <Icon name="navigation" style={{ fontSize: 26 }} />
                </View>
              </View>
            </View>
          ) : null
      }
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})