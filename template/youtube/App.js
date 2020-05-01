import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet,View,Image,TouchableOpacity, FlatList,Text} from 'react-native';
import VideoItem from './components/VideoItem';
//import dummy data
import data from './data.json';
const YoutubeUi  = () => {
    return(
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Image source={require('./images/icon.png')} style={{height:48,width:22}} />
                <View style={styles.rightNavBar}>
                    <TouchableOpacity>
                        <Icon style={styles.navItem} name="search" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={styles.navItem} name="account-circle" size={25} />
                    </TouchableOpacity>  
                </View>
            </View>
           
            <View style={styles.body}>
                <FlatList
                data={data.items}
                keyExtractor={(item)=>{item.id}}
                ItemSeparatorComponent={() => <View style={{height:0.5,backgroundColor:'#E5E5E5'}}/>}
                renderItem={(video) => <VideoItem key={video.item.id} video={video.item} /> }
                 />
            </View>
           
            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='home' size={25} />
                    <Text style={styles.tabTitle}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='whatshot' size={25} />
                    <Text style={styles.tabTitle}>Trending</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='subscriptions' size={25} />
                    <Text style={styles.tabTitle}>Subscriptions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='folder' size={25} />
                    <Text style={styles.tabTitle}>Library</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    navBar: {
        height:80,
        backgroundColor: 'white',
        elevation:6,
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    rightNavBar:{
        flexDirection: 'row'
    },
    navItem:{
        marginLeft:25

    },
    body:{
        flex:1

    },
    tabBar:{
        backgroundColor:'white',
        height:60,
        borderTopWidth:0.5,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tabItem:{
        alignItems:'center',
        justifyContent:'center'
    },
    tabTitle:{
        fontSize:11,
        color:'#3c3c3c',
        paddingTop:4
    }
});
export default YoutubeUi;