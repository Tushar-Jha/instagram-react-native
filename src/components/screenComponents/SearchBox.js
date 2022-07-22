import { StyleSheet, Text, View,TextInput} from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons';
import React from 'react'


const SearchBox = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', paddingVertical: 10, position: "relative",height:60}}>
            <Ionic name="search" style={{
                fontSize: 18,
                opacity: 0.7,
                position: 'absolute',
                zIndex: 1,
                left:25,
            }} />
            <TextInput placeholder='Search' style={{backgroundColor:'#D3D3D3',width:'94%',paddingVertical:10,textAlign:'center',borderRadius:10,opacity:0.7}}/>
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({})