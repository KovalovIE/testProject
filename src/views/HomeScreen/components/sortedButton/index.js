import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { getStyle } from './styles';

const SortedButton = (data) => {
    const styles = getStyle();

    return (
        <Pressable onPress={data.onPress}>
            <View style={styles.container}>
                <Text>Sort Button</Text>
            </View>
        </Pressable>
    );
}

export default SortedButton;