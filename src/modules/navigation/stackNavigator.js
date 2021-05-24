import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../../views/DetailScreen/index';
import HomeScreen from '../../views/HomeScreen/index';
import SplashScreen from '../../views/SplashScreen/index';

const Stack = createStackNavigator();

export const AppStackNavigator = () => {
    const isDataLoaded = useSelector(state => state.appState.isAppSplashScreenLoaded);

    return (
        <Stack.Navigator initialRouteName="SplashScreen">
            {
                isDataLoaded
                    ? <>
                        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }}/>                        
                    </>
                    : <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
            }
        </Stack.Navigator >
    );
};