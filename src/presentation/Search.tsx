import React, { FC, useState } from 'react';
import { FlatList, Image, Text, TextInput, View } from 'react-native';
import styles from '../../styles/SearchStyles';
import { DependencyInjections } from '../di/DependencyInjections';
import UserItem from './components/UserItem';
import Header from './components/Header';
import { User } from '../domain/entity/User';

const Search: FC = () =>  {
    
    const [users, setUsers] = useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const searchUser = async() => {
        const users = await DependencyInjections.instance().searchUsersUseCase(searchQuery)
        if(users){
            setSearchQuery('')
            setUsers([])
            setUsers(users)
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
              style={styles.searchIcon}
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
              <UserItem {...item} />
            )}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={handleEmpty} />
        </View>
    );
}

export default Search;