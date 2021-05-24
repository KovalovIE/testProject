import axios from 'axios';
import React, { useEffect, useMemo } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setIsDataLoaded, setUsersData } from '../../modules/redux/reducersAndActions/usersData/userDataActions/';
import CardItem from './components/cardItem/index';
import SortedButton from './components/sortedButton/index';
import { useNavigation } from '@react-navigation/core';
import { getStyle } from './styles';
import { getDataFromServer } from '../../libs/requester/requester';

const HomeScreen = () => {
    const isUsersDataLoaded = useSelector(state => state.usersData.isUsersDataLoaded);
    const usersData = useSelector(state => state.usersData.usersData);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const styles = getStyle();

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts?_page=1&_limit=25';
        getDataFromServer(url, dispatch).then(result => {
            dispatch(setIsDataLoaded(true))
            dispatch(setUsersData(result));
        });
    }, []);

    const userData = useMemo(() => {
        return usersData;
    }, [usersData]);

    const sortList = () => {
        const sortedList = userData.reverse();
        dispatch(setUsersData(sortedList));
    };

    return (
        isUsersDataLoaded
            ? <>
                <SortedButton onPress={sortList}/>
                <FlatList
                    data={userData}
                    keyExtractor={item => `${item?.id}`}
                    renderItem={ ({ item }) => <CardItem item={item?.id} onPress={() => { navigation.navigate('DetailScreen', item) }}/> }
                />
              </>
            : <ActivityIndicator size="large" color="#000" style={styles.container}/>
    )
}

export default HomeScreen;