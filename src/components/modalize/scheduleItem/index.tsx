import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize'
import DateTimePicker from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export const ScheduleItem: React.FC<{ modalizeRef: React.Ref<Modalize> }> = ({ modalizeRef }) => {
    const { t, i18n } = useTranslation();

    const [date, setDate] = useState(new Date())
    const [text, setText] = useState('')

    const onChange = (selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date
        setDate(currentDate)

        let tempDate = new Date(currentDate)
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        let fTime = tempDate.getHours() + ':' + tempDate.getMinutes()
        setText(fDate + '  /+/  ' + fTime)
    }

    return (
        <Modalize
            ref={modalizeRef}
            snapPoint={500}
            modalStyle={styles.modalStyle}
        >
            <View style={styles.modalBody}>
                <Text style={styles.title}>{t("components.modalize.scheduleItem.review")}</Text>

                <View style={styles.container}>
                    <Text style={styles.description}>{t("components.modalize.scheduleItem.datetime")}</Text>

                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="datetime"
                        display="compact"
                        accentColor="#158F97"
                        minimumDate={new Date()}
                        locale={t(`components.modalize.scheduleItem.${i18n.language}`)}
                        onChange={(event, selectedDate) => {
                            if (event.type === "set") {
                                onChange(selectedDate);
                            }
                        }}
                    />
                </View>

                <TextInput style={styles.input} placeholder={t("components.modalize.scheduleItem.titlePlaceholder")} />

                <TextInput
                    style={styles.textArea}
                    multiline={true}
                    numberOfLines={4}
                    // value={personalNotes}
                    // onChangeText={text => setPersonalNotes(text)}
                    placeholder={t("components.modalize.scheduleItem.descriptionPlaceholder")}
                    textAlignVertical="top"
                />

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clipboard-edit" size={20} color="#fff" />
                        <Text style={styles.buttonText}>{t("components.modalize.scheduleItem.edit")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clipboard-check" size={20} color="#fff" />
                        <Text style={styles.buttonText}>{t("components.modalize.scheduleItem.finished")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#A80F0F' }]}>
                        <Icon name="delete" size={20} color="#fff" />
                        <Text style={styles.buttonText}>{t("components.modalize.scheduleItem.delete")}</Text>
                    </TouchableOpacity>
                </View>
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
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10
    },
    title: {
        color: '#262626',
        fontWeight: '600',
        letterSpacing: .64,
        fontSize: 16,
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
    input: {
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 16,
        borderColor: '#D9D9D9',
        height: 60,
        marginBottom: 12,
        fontSize: 14,
        justifyContent: 'center',
    },
    button: {
        padding: 18,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#158F97',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '400',
        letterSpacing: .64,
        fontSize: 10,
        marginLeft: 8
    },
    description: {
        color: '#555',
        fontSize: 14,
    },
    actions: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    }
});
