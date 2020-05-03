import React from 'react';
import { StyleSheet, View} from 'react-native';
import News from './components/NewsComponent';
export default function App() {

  return (
    <View style={styles.container}>
      <News />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
