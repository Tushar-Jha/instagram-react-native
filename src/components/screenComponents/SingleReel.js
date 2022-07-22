import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const SingleReel = ({ item, index, currentIndex }) => {

    const windowWidth=Dimensions.get('window').width;
    const windowHeight=Dimensions.get('window').height;


    return (
        <View>
            <Text style={{ color: 'white', }}>SingleReel</Text>
        </View>
    )
}

export default SingleReel

const styles = StyleSheet.create({})