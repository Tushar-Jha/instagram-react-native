import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'


const Status = ({ route, navigation }) => {
    const { name } = route.params;
    const { image } = route.params;

    const [progress, setProgress] = React.useState(new Animated.Value(0));

    React.useEffect(() => {
        let timer = setTimeout(() => {
            navigation.goBack();
        }, 5000)

        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false
        }).start();
        return () => clearTimeout(timer)
    }, []);

    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%']
    })
    return (
        <View style={{ backgroundColor: 'black', height: "100%", position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar backgroundColor='black' barStyle='light-content' />
            <View style={{ height: 3, width: '95%', borderWidth: 1, backgroundColor: 'grey', position: 'absolute', top: 18 }}>
                <Animated.View style={{ height: '100%', backgroundColor: 'white', width: progressAnimation }}>
                </Animated.View>
                <View style={{ padding: 15, flexDirection: "row" }}>

                </View>
                <View style={{ borderRadius: 100, width: 30, height: 30, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 12, flexDirection: 'row', left: 56 }}>
                    <Image source={image} style={{ borderRadius: 100, backgroundColor: 'orange', resizeMode: 'cover', width: '92%', height: '92%' }} />
                    <Text style={{ color: 'white', fontSize: 10, opacity: 0.7, paddingLeft: 10, width: 80 }}>{name}</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionic name="close" style={{ fontSize: 20, color: 'white', opacity: 0.6, left: 250 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={image} style={{ position: 'absolute', width: '100%', height: 600 }} />
            <View style={{ position: "absolute", bottom: 0, left: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                <TextInput placeholder='send message' placeholderTextColor='white' style={{ borderColor: 'white', borderRadius: 25, width: '85%', height: 50, paddingLeft: 20, borderWidth: 1, fontSize: 16, opacity: 0.4, color: 'white' }} />
                <Icon
                    name="navigation"
                    size={30}
                    color='white'
                    style={{ opacity: 0.4, top: 2, right: 5 }}
                />
            </View>
        </View>
    )
}

export default Status

const styles = StyleSheet.create({})