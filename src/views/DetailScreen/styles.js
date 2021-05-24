import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
        },
        textStyle: {
          paddingHorizontal: 10,
          paddingVertical: 20
        },
    });
    return styles
};