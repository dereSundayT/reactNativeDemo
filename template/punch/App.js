import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ListView,
  FlatList,
} from 'react-native';
import Axios from 'axios';

const PunchUi = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  getPosts = async () => {
    setLoading(true);
    const res = await Axios.get(
      `http://blog.deesuntech.com/wp-json/wp/v2/posts`
    );
    setPosts(res.data);
    setIsLoading(false);
  };
  //http://blog.deesuntech.com/wp-json/wp/v2/posts
  useEffect(() => {
    //this function will run when the page load
    //getUserRepos(match.params.login)
    getPosts();
    //eslint-disable-next-line
  }, []);

  return (
      
    <View style={styles.container}>
      <View style={styles.navBarContainer}>
        <View style={styles.topBar}>
          <TouchableOpacity>
            <Icon name='menu' style={styles.topNavIcon} />
          </TouchableOpacity>
          <Text style={styles.topBarTitle}>Punch News</Text>
          <TouchableOpacity>
            <Icon name='search' style={styles.topNavIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.tabItemContainer}>
          <Text>LATEST</Text>
          <Text>LATEST</Text>
          <Text>LATEST</Text>
          <Text>LATEST</Text>
        </View>
      </View>
      {/* Body Section */}
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={posts}
          renderItem={(post) => <Text> {post.title.rendered} </Text>}
        />
        <View>
            {posts.map((post) => post.id)}
            </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  navBarContainer: {
    backgroundColor: 'red',
    paddingHorizontal: 5,
    height: 80,
  },
  topBar: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topNavIcon: {
    color: 'white',
    fontSize: 25,
  },
  topBarTitle: {
    color: 'white',
    fontSize: 20,
    flex: 1,
    marginLeft: 10,
  },
  tabItemContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default PunchUi;
