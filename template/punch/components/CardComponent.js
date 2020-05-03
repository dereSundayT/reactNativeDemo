import React from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';

const Card = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                {props.children}
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        borderRadius:6,
        elevation:4,
        backgroundColor:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowRadius:2,
        marginHorizontal:8,
        marginVertical:5,
        paddingVertical:1
    }

});
export default Card;