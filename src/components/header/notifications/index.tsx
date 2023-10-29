import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export const Notifications: React.FC = () => {
    const navigation = useNavigation();

    const handleNotificationPress = () => {
        // @ts-expect-error
        navigation.navigate('Notifications');
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleNotificationPress}>
            <Icon name="bell" size={24} color="#9D9D9D" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20
    }
});

