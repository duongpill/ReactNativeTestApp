/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from 'react-native';
import styles from '../../styles/HomeStyles';
import PostCard from './components/PostCard';
import { DependencyInjections } from '../di/DependencyInjections';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from './components/HomeHeader';
import { Post } from '../domain/entity/Post';
import Loading from './components/Loading';

const Home: FC = () => {

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Post[]>([]);
  const [paginationToken, setPaginationToken] = useState<string>()

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = useCallback(async () => {
    if(loading) {
      return;
    }

    setLoading(true)
    var postResponse = await DependencyInjections.instance().getPostsUseCase(paginationToken)
    if(postResponse){
      setItems((currentItems) => [...currentItems, ...postResponse?.posts!])
      setPaginationToken(postResponse.paginationToken)
    }
    setLoading(false)
  }, [paginationToken]);

  const loadMore = () => {
    if(!loading){
      fetchData()
    }
  }

  const renderFooter = useMemo(() => {
    console.log('renderFooter')
    return (
      <View>
        <Text></Text>
        {(loading && items.length > 0) && <ActivityIndicator />}
      </View>
    )
  }, [items]);

  const handleEmpty = () => {
    console.log('handleEmpty')
    return !loading && <Text style={styles.textEmpty}>Data not found!</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader title="Home" />
      {(items.length == 0) && <Loading isLoading={loading} />}
      <View style={styles.flatListContainer}>
        <FlatList
          data={items}
          contentContainerStyle={{ gap: 10, flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <PostCard {...item} />
          )}
          keyExtractor={(index) => index.toString()}
          ListEmptyComponent={handleEmpty}
          ListFooterComponent={renderFooter}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;