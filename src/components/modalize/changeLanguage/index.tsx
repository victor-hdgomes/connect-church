import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import RNPickerSelect from "react-native-picker-select";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export const ChangeLanguage: React.FC<{ modalizeRef: React.Ref<Modalize> }> = ({ modalizeRef }) => {
    const { t, i18n } = useTranslation();

    const [language, setLanguage] = useState(i18n.language);

    const languages = [
        { label: "Português", value: "pt" },
        { label: "Español", value: "es" },
        { label: "English", value: "en" },
    ];

    const changeLanguage = (value: string) => {
        i18n.changeLanguage(value);
    }

    return (
        <Modalize
            ref={modalizeRef}
            snapPoint={360}
            modalStyle={styles.modalStyle}
        >
            <View style={styles.modalBody}>
                <Text style={styles.title}>{t("components.modalize.changeLanguage.title")}</Text>
                <View style={styles.input}>
                    <RNPickerSelect
                        onValueChange={(value) => setLanguage(value)}
                        items={languages}
                        value={language}
                    />
                </View>

                <TouchableOpacity onPress={() => changeLanguage(language)} style={styles.button}>
                    <Icon name="account-switch" size={20} color="#fff" />
                    <Text style={styles.buttonText}>{t("components.modalize.changeLanguage.button.changeLanguage")}</Text>
                </TouchableOpacity>
            </View>
        </Modalize>
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
    input: {
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 16,
        borderColor: '#D9D9D9',
        height: 60,
        marginBottom: 35,
        fontSize: 16,
        justifyContent: 'center',
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
