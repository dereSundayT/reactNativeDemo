import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet,View,Image,TouchableOpacity,Text} from 'react-native';

const VideoItem = ({video}) => {
    return(
        <View style={styles.container}>
            <Image source={{uri:video.snippet.thumbnails.medium.url}}  style={{height:200}}/>
            <View style={styles.descContainer}>
                <Image source={{uri:'https://randomuser.me/api/portraits/men/0.jpg'}} style={{width:50, height:50,borderRadius:25}}/>
                <View style={styles.videoDetails}>
                    <Text numberOfLines={2} style={styles.videoTitle}>{video.snippet.title}</Text>
                    <Text style={styles.videoStats}>{video.snippet.channelTitle + " . "+ video.statistics.viewCount + '. 3 months ago'}</Text>
                </View>
                <TouchableOpacity>
                    <Icon name="more-vert" size={20} color="#999999" />
                </TouchableOpacity>
            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        padding:15
    },
    descContainer:{
        flexDirection: 'row',
        paddingTop:15,
    },
    videoTitle:{
        fontSize:16,
        color:'#3c3c3c'
    },
    videoDetails:{
        paddingHorizontal:15,
        flex:1
    },
    videoStats:{
        fontSize:15,
        paddingTop:3
    }

})
export default VideoItem;