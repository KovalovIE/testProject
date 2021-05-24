import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { getStyle } from './styles';

const CardItem = (data) => {
    const styles = getStyle();

    return (
        <Pressable onPress={data.onPress}>
            <View style={styles.container}>
                <Text>{data?.item}</Text>
            </View>
        </Pressable>
    );
}

export default CardItem;