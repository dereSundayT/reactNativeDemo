import React from 'react';
import {StyleSheet,View} from 'react-native';
import NewsItem from './NewsItemComponent';

const News = () => {
    return(
        <View style={styles.container}>
            <NewsItem />

        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

});

export default News;