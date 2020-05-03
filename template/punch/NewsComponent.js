import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import NewsItem from './NewsItem';

const News = ({posts,loading}) =>  {
    if(loading){
        return(
        <Text>Loading.....</Text>
        )
    }
    return(
        <View style={styles.container}>
            {posts.map( post => <NewsItem key={post.id} post={post} />)}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
export default News;