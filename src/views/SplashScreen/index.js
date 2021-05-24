import React, { useEffect, useRef, useMemo } from 'react';
import { Text, View, Animated } from 'react-native';
import { useDispatch } from 'react-redux';
import { changeAppLoadState } from '../../modules/redux/reducersAndActions/appState/appStateActions';
import { getStyle } from './styles';

const SplashScreen = () => {
    const dispatch = useDispatch();
    const styles = getStyle();

    useEffect(() => {
        setTimeout(() => {
            dispatch(changeAppLoadState(true));
        }, 1000)
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.textSize}>Test</Text>
        </View >
    )
};

export default SplashScreen;