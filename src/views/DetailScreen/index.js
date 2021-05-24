import React from 'react';
import { Text, View } from 'react-native';
import { getStyle } from './styles';

const DetailScreen = ({ route }) => {
    const styles = getStyle();

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{route.params?.title}</Text>
            <Text style={styles.textStyle}>{route.params?.id}</Text>
            <Text style={styles.textStyle}>{route.params?.body}</Text>
            <Text style={styles.textStyle}>{route.params?.userId}</Text>
        </View>
    )
}

export default DetailScreen;