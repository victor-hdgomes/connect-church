import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { handleAuthentication } from "@/utils/localAuthentication";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export const ChangeAccount: React.FC<{ modalizeRef: React.Ref<Modalize> }> = ({ modalizeRef }) => {
    const { t } = useTranslation();

    const changeAccount = async () => {
        const authenticationResult = await handleAuthentication();

        if (authenticationResult) {
            console.log('Autenticação bem-sucedida.');
        } else {
            console.log('Autenticação falhou ou foi cancelada.');
        }
    }

    return (
        <Modalize
            ref={modalizeRef}
            snapPoint={500}
            modalStyle={styles.modalStyle}
        >
            <View style={styles.modalBody}>
                <Text style={styles.title}>{t("components.modalize.changeAccount.changeAccount")}</Text>
                <View style={{ marginBottom: 58 }}>
                    <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{
                                padding: 14,
                                borderRadius: 50,
                                backgroundColor: '#F5F5F5',
                                marginRight: 16
                            }}>
                                <IconFontAwesome5 name="user-alt" size={18} color="#9D9D9D" />
                            </View>
                            <View>
                                <Text style={{ color: '#9D9D9D', fontSize: 14, fontWeight: '700', letterSpacing: 1.12, textTransform: 'uppercase' }}>{t("components.modalize.changeAccount.customer")}</Text>
                                <Text style={{ color: '#434343', fontSize: 16, fontWeight: '700', letterSpacing: 1.28 }}>Marcio Silveiras</Text>
                            </View>
                        </View>
                        <IconFontAwesome name="circle-o" size={20} color="#9d9d9d" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 24, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3FBFC', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{
                                padding: 14,
                                borderRadius: 50,
                                backgroundColor: '#C4ECEF',
                                marginRight: 16
                            }}>
                                <IconMaterialIcons name="business" size={18} color="#158F97" />
                            </View>
                            <View>
                                <Text style={{ color: '#9D9D9D', fontSize: 14, fontWeight: '700', letterSpacing: 1.12, textTransform: 'uppercase' }}>{t("components.modalize.changeAccount.professional")}</Text>
                                <Text style={{ color: '#434343', fontSize: 16, fontWeight: '700', letterSpacing: 1.28 }}>Marcearia do Padrinho</Text>
                            </View>
                        </View>
                        <IconFontAwesome name="circle" size={20} color="#158F97" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={changeAccount} style={styles.button}>
                    <Icon name="account-switch" size={20} color="#fff" />
                    <Text style={styles.buttonText}>{t("components.modalize.changeAccount.button.changeAccount")}</Text>
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
        paddingVertical: 20
    },
    title: {
        paddingHorizontal: 20,
        color: '#262626',
        fontWeight: '600',
        letterSpacing: .64,
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 15
    },
    button: {
        marginHorizontal: 20,
        paddingVertical: 18,
        flexDirection: 'row',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#158F97'
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        letterSpacing: .64,
        fontSize: 16,
        marginLeft: 8
    },
});
