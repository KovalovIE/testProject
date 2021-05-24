import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 150,
            backgroundColor: '#d3d3d3',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
        },
    });
    return styles
};