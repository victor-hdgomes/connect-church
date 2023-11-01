import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ScheduleListItem: React.FC<{ onPress: () => void, title: string }> = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.content}>
                <View style={styles.icon}>
                    <Text style={styles.date}>31</Text>
                    <Text style={styles.day}>Terça</Text>
                </View>
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
            <Icon name="navicon" size={20} color="#158F97" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E9E9E9'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        padding: 14,
        borderRadius: 15,
        backgroundColor: '#158F97',
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    date: {
        fontWeight: '800',
        fontSize: 22,
        color: '#fff',
    },
    day: {
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: .56,
        color: '#fff',
    },
    title: {
        color: '#434343',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 1.28
    },
    subtitle: {
        color: '#555',
        fontSize: 12,
        letterSpacing: .48
    }
});
