import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const UnreadNotificationListItem: React.FC<{ title: string; description: string, date: string }> = ({ title, description, date }) => (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <View style={styles.icon}>
                <View style={{width: 10, height: 10, backgroundColor: '#158F97', borderRadius: 50, position: 'absolute', left: 3, top: 3}} />
                <Icon name="school" size={24} color="#158F97" />
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
        <View>
            <Text style={styles.date}>{date}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 24,
        borderBottomWidth: 1,
        backgroundColor: '#F3FBFC',
        borderBottomColor: '#E9E9E9',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        letterSpacing: 1.28,
        color: '#434343',
        fontSize: 16,
        fontWeight: '700'
    },
    description: {
        color: '#555',
        fontSize: 12,
        letterSpacing: .48
    },
    date: {
        color: '#9D9D9D',
        letterSpacing: .56,
        fontSize: 14,
        fontWeight: '700',
        marginTop: 12
    },
    icon: {
        padding: 14,
        borderRadius: 50,
        backgroundColor: '#C4ECEF',
        marginRight: 16
    }
});
