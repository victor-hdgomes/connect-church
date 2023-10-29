import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Modalize } from 'react-native-modalize'
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export const Payment: React.FC<{ modalizeRef: React.Ref<Modalize> }> = ({ modalizeRef }) => {
    const { t } = useTranslation();

    return (
        <Modalize
            ref={modalizeRef}
            snapPoint={800}
            modalStyle={styles.modalStyle}
        >
            <View style={styles.modalBody}>
                <Text style={styles.title}>{t("components.modalize.payment.title")}</Text>
                <Text style={styles.description}>{t("components.modalize.payment.description")}</Text>

                <Animatable.View animation={'fadeIn'} delay={250} style={styles.qrcode} >
                    <Image source={require('@/assets/pix-code.png')} />
                </Animatable.View>

                <Text style={styles.pixCode}>00060295410658069564109as9asdf0asdfasd9f0asd12f9a2s0c95a0s9d5f14fa90sd4f19s02c9as12d95f1cv9a1290984980990502951091a9s10dfa12d90f1a2s90f1a9sd8120fa9s51d0f9a1sd0</Text>

                <View style={styles.dataContainer}>
                    <Text style={styles.dataLabel}>{t("components.modalize.payment.dataLabel.value")}</Text>
                    <Text style={styles.currencySymbol}>R$ <Text style={styles.value}>60,00</Text></Text>
                </View>

                <View style={styles.dataContainer}>
                    <Text style={styles.dataLabel}>{t("components.modalize.payment.dataLabel.expirationDate")}</Text>
                    <Text style={styles.expirationDate}>{t("components.modalize.payment.dataLabel.expirationDateTime")}</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Icon name="copy" size={20} color="#1A6065" />
                    <Text style={styles.buttonText}>{t("components.modalize.payment.copy")}</Text>
                </TouchableOpacity>
            </View>
        </Modalize >
    )
}

const styles = StyleSheet.create({
    modalStyle: {
        marginTop: 20
    },
    modalBody: {
        padding: 20
    },
    title: {
        color: '#262626',
        fontWeight: '600',
        letterSpacing: .64,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15
    },
    description: {
        color: '#555',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center'
    },
    textArea: {
        height: 100,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginBottom: 10,
        fontSize: 14,
        fontStyle: 'italic',
        color: '#9D9D9D',
        borderRadius: 12,
    },
    button: {
        paddingVertical: 18,
        flexDirection: 'row',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#1A6065',
        borderWidth: 1
    },
    buttonText: {
        color: '#1A6065',
        fontWeight: '700',
        letterSpacing: .64,
        fontSize: 16,
        marginLeft: 8
    },
    qrcode: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pixCode: {
        color: '#7B7B7B',
        fontSize: 14,
        marginBottom: 40
    },
    dataContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 23,
        alignItems: 'center'
    },
    dataLabel: {
        color: '#9D9D9D',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: .96
    },
    expirationDate: {
        color: '#262626',
        fontSize: 14,
        letterSpacing: .56
    },
    currencySymbol: {
        color: '#9D9D9D',
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: .8
    },
    value: {
        color: '#17A21C',
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: .8
    }
});
