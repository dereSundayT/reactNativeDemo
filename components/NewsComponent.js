import React from 'react';
import {StyleSheet,View,ScrollView} from 'react-native';
import NewsItem from './NewsItemComponent';

const News = () => {
    return(
        <ScrollView>
         <View style={styles.container}>
            <NewsItem id='1'/>
            <NewsItem id='1' />
            <NewsItem id='1' />
            <NewsItem id='1' />
            <NewsItem id='1' />
            <NewsItem id='1' />
            <NewsItem id='1' />
            <NewsItem id='1' />
            <NewsItem id='2' />
            <NewsItem id='1' />
            <NewsItem id='1' />
            <NewsItem id='1' />
            <NewsItem id='1' />
            <NewsItem id='3' />
         </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
    },

});

export default News;