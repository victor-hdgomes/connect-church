import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Info: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Icon name="information-circle-outline" size={20} color="#9D9D9D" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20
    }
});

