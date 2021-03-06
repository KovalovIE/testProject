import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {AppStackNavigator } from './stackNavigator';

export const RootNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <AppStackNavigator />
        </NavigationContainer>
    </SafeAreaView>
  );
};