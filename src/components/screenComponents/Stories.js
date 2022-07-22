import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'


const Stories = () => {

    const navigation=useNavigation();

    const storyInfo = [
        {
            id: 1,
            name: 'Your Story',
            image: require('../../storage/images/sumaid-pal-singh-bakshi-sJKGjk3Pb4M-unsplash.jpg'),
        },{
            id: 0,
            name: 'cristiano',
            image: require('../../storage/images/pavel-ogar-wBnPxKAZSaI-unsplash.jpg'),
        },{
            id: 0,
            name: 'leomessi',
            image: require('../../storage/images/jon-anders-dalan-Fqo15S35daE-unsplash.jpg'),
        },
        {
            id: 0,
            name: 'zlatan',
            image: require('../../storage/images/pavel-ogar-3z9_Uqlk_kg-unsplash.jpg'),
        },
        {
            id: 0,
            name: 'r9',
            image: require('../../storage/images/siednji-leon-CRdRKHvDyrE-unsplash.jpg'),
        },
        {
            id: 0,
            name: 'xavi6',
            image: require('../../storage/images/sumaid-pal-singh-bakshi-sJKGjk3Pb4M-unsplash.jpg'),
        },
        {
            id: 0,
            name: 'neymar11',
            image: require('../../storage/images/siednji-leon-3I8gT92ev2g-unsplash.jpg'),
        },

    ]

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingVertical: 20, }}>
            {
                storyInfo.map((data, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={()=>navigation.push("Status",{
                            name:data.name,
                            image:data.image
                        })}>
                            <View style={{ flexDirection: 'column', paddingHorizontal: 8, position: 'relative' }}>
                                {data.id == 1 ? (

                                    <View
                                        style={{
                                             top:50,left:55,zIndex: 1,position:'absolute'
                                        }}
                                    >
                                        <Entypo name='circle-with-plus' style={{ fontSize: 20, color: "#405de6", backgroundColor: 'white', borderRadius: 100 }} />
                                    </View>

                                ) : null
                                }
                                <View style={{
                                    width: 68,
                                    height: 68,
                                    backgroundColor: 'white',
                                    borderWidth: 1.8,
                                    borderRadius: 100,
                                    borderColor: '#c13584',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image source={data.image} style={{ resizeMode: 'cover', width: '92%', height: '92%', borderRadius: 100, backgroundColor: 'orange' }} />
                                </View>
                                <Text style={{ textAlign: 'center', fontSize: 10, opacity: data.id == 0 ? 1 : 0.6 }}>{data.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}

export default Stories

const styles = StyleSheet.create({})