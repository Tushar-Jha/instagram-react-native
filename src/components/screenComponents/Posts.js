import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import React from 'react'

const Posts = () => {

    const postInfo = [
        {
            postTitle: 'tushar_0_',
            postPersonImage: require('../../storage/images/oppo-Nr88sR3i4Tg-unsplash.jpg'),
            postImage: require('../../storage/images/jon-anders-dalan-Fqo15S35daE-unsplash.jpg'),
            likes: 765,
            isLiked: false,
            isBookMarked: false
        },
        {
            postTitle: 'cristiano',
            postPersonImage: require('../../storage/images/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg'),
            postImage: require('../../storage/images/stefan-stefancik-QXevDflbl8A-unsplash.jpg'),
            likes: 238,
            isLiked: true,
            isBookMarked: false
        },
        {
            postTitle: 'mike_shinoda_official',
            postPersonImage: require('../../storage/images/craig-mckay-jmURdhtm7Ng-unsplash.jpg'),
            postImage: require('../../storage/images/siednji-leon-3I8gT92ev2g-unsplash.jpg'),
            likes: 165,
            isLiked: false,
            isBookMarked: true
        },
        {
            postTitle: 'chesterbennington',
            postPersonImage: require('../../storage/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'),
            postImage: require('../../storage/images/siednji-leon-CRdRKHvDyrE-unsplash.jpg'),
            likes: 700,
            isLiked: false,
            isBookMarked: false
        },
        {
            postTitle: 'harveydent',
            postPersonImage: require('../../storage/images/stefan-stefancik-QXevDflbl8A-unsplash.jpg'),
            postImage: require('../../storage/images/craig-mckay-jmURdhtm7Ng-unsplash.jpg'),
            likes: 38123,
            isLiked: true,
            isBookMarked: true
        }
    ]

    return (
        <View>
            {
                postInfo.map((data, index) => {
                    const [liked, setLiked] = React.useState(data.isLiked);
                    const [bookMarked, setBookMarked] = React.useState(data.isBookMarked)
                    return (
                        <View key={index} style={{
                            paddingBottom: 10,
                            borderBottomColor: 'grey',
                            borderBottomWidth: 0.1
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                padding: 15,
                                width: '100%',
                                position: 'relative'
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={data.postPersonImage} style={{ width: 34, height: 34, borderRadius: 100, right: 5 }} />
                                </View>
                                <View style={{ paddingLeft: 5 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{data.postTitle}</Text>
                                </View>
                                <Icon name="more-vertical" style={{ fontSize: 20, position: 'absolute', left: '98%' }} />
                            </View>
                            <View style={{ top: -8 }}>
                                <Image source={data.postImage} style={{ width: '100%', height: 400 }} />
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '96%' }}>
                                <View style={{ paddingLeft: 10, zIndex: 2, flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ width: 30 }} onPress={() => { setLiked(!liked) }}>
                                        <Ionic name={liked ? 'ios-heart' : 'ios-heart-outline'} size={30} color={liked ? 'red' : 'black'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: 30, marginHorizontal: 10, fontWeight: 'bold' }} >
                                        <Ionic name='ios-chatbubble-outline' size={26} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: 30, marginLeft: -4 }} >
                                        <Icon name='navigation' size={24} />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => { setBookMarked(!bookMarked) }}>
                                    <FontAwesome name={bookMarked ? 'bookmark' : 'bookmark-o'} size={26} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 12, fontWeight: "bold" }}>Liked by {liked ? 'you and ' : ' '}{data.likes} Others</Text>
                                <Text style={{paddingVertical:2}}>
                                    This is the post description!
                                </Text>
                                <Text style={{opacity:0.4,paddingVertical:2}}>View all comments...</Text>
                                <View style={{flexDirection:'row',marginTop:10}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Image source={data.postPersonImage} style={{width:25,height:25,borderRadius:100,backgroundColor:'orange',marginRight:10}}/>
                                    </View>
                                    <TextInput placeholder='Add a comment...' style={{opacity:0.5,fontSize:12}}/>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Posts

const styles = StyleSheet.create({})