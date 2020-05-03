import React from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './components/HeaderComponent';
import News from './components/NewsComponent';
export default function App() {

  return (
    <View style={styles.container}>
      <Header/>
      <News />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
