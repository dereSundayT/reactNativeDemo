import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';


const PunchUi = () => {
    return(
        <View style={styles.container}>
            <Text>Punch News App</Text>
            <View style={styles.navBarContainer}>
                <View style={styles.topBar}>
                    <TouchableOpacity>
                        <Icon name="menu" style={styles.topNavIcon}  size={30} color='white'/>
                    </TouchableOpacity>
                    <Text>Punch News</Text>
                    <TouchableOpacity>
                        <Icon name="search" style={styles.topNavIcon} size={30}/>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:50,
    },
    navBarContainer:{
        
    },
    topBar:{
        flexDirection: 'row',
        backgroundColor: 'red',
        paddingHorizontal:5,
        height:40,
        alignItems:"center",
        justifyContent:"space-between",
    },
    topNavIcon:{
        color:'white',
    }
})
export default PunchUi;