import React from "react";
import { StyleSheet, View, Text } from 'react-native';

export const FilterItem: React.FC<{ label: string }> = ({ label }) => (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: '#F3FBFC',
        borderRadius: 16,
    },
    label: {
        color: '#1A6065',
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: .4,
    }
});
