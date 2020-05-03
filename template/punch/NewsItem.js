import React,{useEffect,useState} from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
import Card from './components/CardComponent';
import axios from 'axios';

const NewsItem = ({post}) => {
    //get the images
    const [image, setImage] = useState('');
    const [loading,setLoading] = useState(false);
    const {featured_media} = post;
    
    useEffect( () => {
       getImage()
      }, []);

    const getImage = async () => {
        setLoading(true);
        const res = await axios.get(`http://blog.deesuntech.com/wp-json/wp/v2/media/${featured_media}`);
        setImage(res.data.media_details.sizes.full.source_url);
        setLoading(false);
        console.log(image)
    }

    return(
        <View style={styles.container}>
            <Card>
                <View style={styles.newsItemContainer}>
                    <Image 
                    style={styles.postImage}
                    source={{uri:`${image}`}}
                    />
                    <View style={styles.postDetailsContainer}>
                        <Text numberOfLines={2} style={styles.postTitle}> {post.title.rendered} </Text>
                        <Text style={styles.postTime}>Time</Text>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    },
    newsItemContainer:{
        flexDirection:'row',
        justifyContent:"flex-start"
    },
    postDetailsContainer:{
        flex:1,
        paddingHorizontal:5
    },
    postImage:{
        borderRadius: 6,
        width:90,
        height:90
    },
    postTitle:{
        fontSize:17,
    },
    postTime:{

    }
});

export default NewsItem;