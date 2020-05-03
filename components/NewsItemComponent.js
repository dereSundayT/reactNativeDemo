import React from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';

const NewsItem = ({id}) => {
    return(
        <View style={styles.container}>
            <View style={styles.postImgContainer}>
                <Image style={styles.postImg}  source={require('../assets/icon.png')} />
            </View>
            <View style={styles.postDetails}>
                <Text>Post Title</Text>
                <Text>Post Time and {id}</Text>
            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginVertical:2,
        marginHorizontal:4,
        paddingHorizontal:9,
        paddingVertical:7,
        borderRadius:6,
        elevation:6,
        height:110
    },
    postImgContainer:{

    },
    postImg:{
        width:120,
        height:100,
        borderBottomLeftRadius:9,
        borderTopLeftRadius:9
    },
    postDetails:{
        flex:3,
        paddingVertical:15,
        marginHorizontal:5
    }


});

export default NewsItem;