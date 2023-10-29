import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

import { useAuth } from "@/contexts/auth";

export const ChangeAccount: React.FC = () => {
    const { t } = useTranslation();

    const { user } = useAuth()

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.firstIcon}>
                <Icon name="camera-retro" size={12} color="#9D9D9D" />
            </View>
            <View style={styles.content}>
                <Text style={styles.changeAccount}>{t("components.header.changeAccount.changeAccount")}</Text>
                <Text style={styles.description}>{t(`components.header.changeAccount.${user?.level}`)}</Text>
            </View>
            <View style={styles.secondIcon}>
                <IconEntypo name="chevron-down" size={16} color="#c4c4c4" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        padding: 8,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    firstIcon: {
        padding: 6,
        backgroundColor: '#f5f5f5',
        borderRadius: 50
    },
    content: {
        flexDirection: 'column',
        marginLeft: 8
    },
    secondIcon: {
        marginLeft: 16,
    },
    changeAccount: {
        fontSize: 7,
        color: '#9D9D9D',
        letterSpacing: .28,
        textTransform: 'uppercase'
    },
    description: {
        color: '#434343',
        fontSize: 10
    }
});