import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import { ScrollView } from 'native-base'

const SearchContent = (props) => {

    const content = [
        require('../../storage/images/posts/post1.jpg'),
        require('../../storage/images/posts/post2.jpg'),
        require('../../storage/images/posts/post3.jpg'),
        require('../../storage/images/posts/post4.jpg'),
        require('../../storage/images/posts/post5.jpg'),
        require('../../storage/images/posts/post6.jpg'),
        require('../../storage/images/posts/post7.jpg'),
        require('../../storage/images/posts/post8.jpg'),
        require('../../storage/images/posts/post9.jpg'),
        require('../../storage/images/posts/post10.jpg'),
        require('../../storage/images/posts/post11.jpg'),
        require('../../storage/images/posts/post12.jpg'),
        require('../../storage/images/posts/post13.jpg'),
        require('../../storage/images/posts/post14.jpg'),
        require('../../storage/images/posts/post15.jpg'),
        require('../../storage/images/posts/post16.jpg'),
        require('../../storage/images/posts/post17.jpg'),
        require('../../storage/images/posts/post18.jpg'),
        require('../../storage/images/posts/post19.jpg'),
        require('../../storage/images/posts/post20.jpg'),

    ]

    return (
        <View>
            <View>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                {
                    content.map((data,index)=>{
                        return(
                            <TouchableOpacity 
                            onPressIn={()=>props.data(data)}
                            onPressOut={()=>props.data(null)}
                            key={index} style={{paddingBottom:2,width:'33%'}}>
                                <Image source={data} style={{width:'100%',height:150}}/>
                            </TouchableOpacity>
                        )
                    })
                }
                </View>
            </View>
        </View>
    )
}

export default SearchContent

const styles = StyleSheet.create({})