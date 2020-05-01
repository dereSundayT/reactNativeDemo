import React from 'react';
import { StyleSheet, View} from 'react-native';
import YoutubeUi from './template/youtube/App';
import PunchUi from './template/punch/App';
export default function App() {

  return (
    <View style={styles.container}>
      <PunchUi />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
