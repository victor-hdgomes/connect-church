import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const RequestedServiceListItem: React.FC<{ serviceType: string; customerName: string, date: string }> = ({ serviceType, customerName, date }) => (
    <View style={{ paddingHorizontal: 20, paddingVertical: 24, borderBottomWidth: 1, borderBottomColor: '#E9E9E9', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <View>
            <Text style={styles.serviceType}>{serviceType}</Text>
            <Text style={styles.customerName}>{customerName}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.actions}>
            <View style={styles.xMark}>
                <Icon name="x" size={20} color="#9D9D9D" />
            </View>
            <View style={styles.checkMark}>
                <Icon name="check" size={20} color="#9D9D9D" />
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    serviceType: {
        color: '#9d9d9d',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: '700'
    },
    customerName: {
        color: '#262626',
        fontSize: 20,
        letterSpacing: .4
    },
    date: {
        color: '#7b7b7b',
        letterSpacing: .56,
        fontWeight: '600',
        marginTop: 12
    },
    actions: {
        display: 'flex',
        flexDirection: 'row'
    },
    xMark: {
        borderWidth: 1,
        padding: 14,
        borderRadius: 50,
        borderColor: '#9d9d9d'
    },
    checkMark: {
        borderWidth: 1,
        padding: 14,
        borderRadius: 50,
        borderColor: '#9d9d9d',
        marginLeft: 8
    }
});
