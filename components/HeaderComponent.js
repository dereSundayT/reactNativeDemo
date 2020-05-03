import React from 'react';
import { StyleSheet, View,Text} from 'react-native';

export default function Header() {

  return (
    <View style={styles.container}>
            <Text style={styles.headerText}>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      height:40,
      paddingVertical:50,
      backgroundColor:'red',
      alignItems:'center'
  },
  headerText:{
      color:'white',
      fontSize:20,
  }
});
