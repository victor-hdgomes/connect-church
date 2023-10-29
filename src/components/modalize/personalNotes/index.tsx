import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export const PersonalNotes: React.FC<{ modalizeRef: React.Ref<Modalize> }> = ({ modalizeRef }) => {
    const { t } = useTranslation();

    const [personalNotes, setPersonalNotes] = useState("");

    return (
        <Modalize
            ref={modalizeRef}
            snapPoint={530}
            modalStyle={styles.modalStyle}
        >
            <View style={styles.modalBody}>
                <Text style={styles.title}>{t("components.modalize.personalNotes.title")}</Text>
                <Text style={styles.description}>{t("components.modalize.personalNotes.description")}</Text>

                <Text style={styles.notes}>{t("components.modalize.personalNotes.notes")}</Text>
                <TextInput
                    style={styles.textArea}
                    multiline={true}
                    numberOfLines={4}
                    value={personalNotes}
                    onChangeText={text => setPersonalNotes(text)}
                    placeholder={t("components.modalize.personalNotes.notesPlaceholder")}
                    textAlignVertical="top"
                />

                <TouchableOpacity style={styles.button}>
                    <IconFontAwesome name="bookmark" size={20} color="#fff" />
                    <Text style={styles.buttonText}>{t("components.modalize.personalNotes.notesButtonSave")}</Text>
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
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 15
    },
    description: {
        color: '#555',
        fontSize: 14,
        marginBottom: 30
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
    notes: {
        color: '#555',
        fontSize: 16,
        fontWeight: '600'
    },
    button: {
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
    }
});
