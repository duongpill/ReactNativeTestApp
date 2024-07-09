/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { FC, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from 'react-native';
import styles from '../../styles/HomeStyles';
import { Post, PostResponse } from '../models/Post';
import PostCard from './components/PostCard';
import { Dependencies } from '../di/Dependencies';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from './components/HomeHeader';

const Home: FC = () => {

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Post[]>([]);
  const [paginationToken, setPaginationToken] = useState('');

  useEffect(() => {
    fetchData('')
  }, []);

  const fetchData = async(pagination_token: string) => {
    if(loading) {
      return;
    }

    var postResponse: PostResponse | null
    setLoading(true)
    if(pagination_token){
      postResponse = await Dependencies.instance.getPostRepository().loadMorePost(pagination_token)
    } else {
      postResponse = await Dependencies.instance.getPostRepository().loadPost()
    }
    if(postResponse){
      // console.log("Post: " + postResponse.data.items.length)
      setItems([...items, ...postResponse.data.items])
      setPaginationToken(postResponse.pagination_token)
    }
    setLoading(false)
  }

  // Function to handle load more (pagination)
  const loadMore = () => {
    // console.log('loadmore: ' + paginationToken + ' -- ' + loading)
    if (!loading) {
      fetchData(paginationToken);
    }
  };

  const renderFooter = () => {
    return (
      <View>
        <Text></Text>
        {(loading && items.length > 0) && <ActivityIndicator />}
      </View>
    )
  };

  const handleEmpty = () => {
    return !loading && <Text style={styles.textEmpty}>Data not found!</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HomeHeader title="Home"/>
        <View style={styles.flatListContainer}>
          <FlatList
            data={items}
            contentContainerStyle={{ gap: 10, flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <PostCard 
                {...item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={handleEmpty}
            ListFooterComponent={renderFooter}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;