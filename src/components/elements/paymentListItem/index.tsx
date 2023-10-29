import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

interface StatusData {
    backgroundColor: string;
    icon: string;
    iconColor: string;
    text: string;
    textColor: string;
}

const statusData: Record<string, StatusData> = {
    pending: { backgroundColor: '#E9E9E9', icon: 'clock', iconColor: '#9D9D9D', text: 'Aguardando', textColor: '#9D9D9D' },
    confirmed: { backgroundColor: '#C4EFDA', icon: 'check', iconColor: '#0F7C47', text: 'Pago', textColor: '#0F7C47' },
    late: { backgroundColor: '#F7CACA', icon: 'calendar', iconColor: '#A80F0F', text: 'Atrasado', textColor: '#A80F0F' },
};

const PaymentListItem: React.FC<{ title: string; subtitle: string; status: string, onLate: () => void }> = (props) => {
    const { title, subtitle, onLate, status } = props;

    const renderStatus = () => {
        const { backgroundColor, icon, iconColor, text, textColor } = statusData[status];
        return (
            <View style={[styles.statusContainer, { backgroundColor }]}>
                <Icon name={icon} size={16} color={iconColor} />
                <Text style={[styles.statusText, { color: textColor }]}>{text}</Text>
            </View>
        );
    };

    return (
        <TouchableOpacity onPress={status === 'late' ? onLate : undefined} style={styles.container}>
            <View style={styles.content}>
                <View style={styles.icon}>
                    <Icon name="calendar" size={20} color="#9D9D9D" />
                </View>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>
            {renderStatus()}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E9E9E9',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        padding: 14,
        borderRadius: 50,
        backgroundColor: '#F5F5F5',
        marginRight: 16,
    },
    title: {
        color: '#434343',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 1.28,
    },
    subtitle: {
        color: '#555',
        fontSize: 12,
        letterSpacing: 0.48,
    },
    statusContainer: {
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 16,
    },
    statusText: {
        marginLeft: 4,
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.56,
    },
});

export default PaymentListItem;