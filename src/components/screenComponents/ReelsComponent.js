import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { videoData } from './Database';
import SingleReel from './SingleReel';


const ReelsComponent = () => {

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleChangeIndex = ({ index }) => {
        setCurrentIndex(index);
    }

    return (
        <SwiperFlatList
            data={videoData}
            vertical={true}
            onChangeIndex={handleChangeIndex}
            renderItem={(item, index) => (
                // <SingleReel item={item} index={index} currentIndex={currentIndex} />
                <View>Hello</View>
            )}
            keyExtractor={(item, index) => index}
        />

    )
}

export default ReelsComponent

const styles = StyleSheet.create({})