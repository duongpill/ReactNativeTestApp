import React, { FC, useState } from 'react';
import { FlatList, Image, Text, TextInput, View } from 'react-native';
import styles from '../../styles/SearchStyles';
import { User } from '../models/User';
import { Dependencies } from '../di/Dependencies';
import UserItem from './components/UserItem';
import Header from './components/Header';

const Search: FC = () =>  {
    
    const [users, setUsers] = useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const searchUser = async() => {
        const userResponse = await Dependencies.instance.searchUserUseCase().search(searchQuery)
        if(userResponse){
            setSearchQuery('')
            setUsers([])
            setUsers(userResponse?.data?.items)
        }
    }

    const handleEmpty = () => {
        return searchQuery && <Text style={styles.textEmpty}>Data not found!</Text>;
    };

    const handleChange = (text: string) => {
        setSearchQuery(text)
    }

    return (
        <View style={styles.container}>
          <Header title="Search" />
          <View style={styles.searchBox}>
            <Image
              style={{width: 22, height: 22, marginLeft: 4, marginRight: 8}}
              source={require('../assets/search.png')}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="What are you looking for?"
              placeholderTextColor="#d4d2d2"
              maxLength={120}
              onChangeText={handleChange}
              returnKeyType='search'
              onSubmitEditing={searchUser}
            />
          </View>
          <FlatList<User> 
            data={users}
            contentContainerStyle={{ gap: 10 }}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <UserItem
                id={item.id}
                full_name={item.full_name}
                is_private={item.is_private}
                isverified={item.isverified}
                profile_pic_url={item.profile_pic_url}
                profile_pic_id={item.profile_pic_id}
                username={item.username} />
            )}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={handleEmpty} />
        </View>
    );
}

export default Search;