import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const ArrowListItem: React.FC<{ onPress?: () => void, icon: string, title: string, subtitle?: string }> = ({ onPress, icon, title, subtitle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.content}>
                <View style={styles.icon}>
                    <Icon name={`${icon}`} size={18} color="#9D9D9D" />
                </View>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    {subtitle && (
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    )}
                </View>
            </View>
            <Icon name="chevron-right" size={20} color="#c4c4c4" />
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
        borderRadius: 50,
        backgroundColor: '#F5F5F5',
        marginRight: 16
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
