import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: { 
            width: 100,
            height: 30,
            backgroundColor: '#a9a9a9',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
            marginVertical: 5,
            borderRadius: 5
        },
    });
    return styles
};