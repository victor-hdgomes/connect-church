import { ErrorMessage, Field, FieldProps, Formik } from 'formik';
import React from 'react';
import { ForgotPasswordModalProps } from '@/interfaces';
import { TouchableOpacity, StyleSheet, Text, Modal, View, TextInput, Image } from 'react-native';
import { createValidationSchemas } from '@/schemas';
import * as Animatable from 'react-native-animatable';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export const ForgotPasswordModal = ({
    open,
    onCancel,
}: ForgotPasswordModalProps) => {
    const { t } = useTranslation();

    const { ForgotPasswordValidationSchema } = createValidationSchemas()

    const handleSubmit = async () => {

    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={open}
                onRequestClose={onCancel}
            >
                <TouchableOpacity
                    style={styles.modalBackground}
                    activeOpacity={1}
                    onPress={onCancel}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitle}>{t("components.modals.forgotPasswordModal.modalTitle")}</Text>

                            <Animatable.View animation={'fadeIn'} delay={200} >
                                <Image source={require('@/assets/image-recover-password.png')} />
                            </Animatable.View>

                            <Text style={styles.modalSmallText}>{t("components.modals.forgotPasswordModal.modalSmallText")}</Text>
                            
                            <Formik
                                initialValues={{ email: '' }}
                                validationSchema={ForgotPasswordValidationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ handleSubmit }) => (
                                    <>
                                        <Text style={styles.title}>{t("components.modals.forgotPasswordModal.email")}</Text>
                                        <Field name="email">
                                            {({ field }: FieldProps<string>) => (
                                                <TextInput
                                                    {...field}
                                                    placeholder={t("components.modals.forgotPasswordModal.emailPlaceholder")}
                                                    style={styles.input}
                                                    onChangeText={field.onChange('email')}
                                                    onBlur={field.onBlur('email')}
                                                />
                                            )}
                                        </Field>
                                        <ErrorMessage name="email">
                                            {(errorMsg) => (
                                                <Text style={styles.errorText}>{errorMsg}</Text>
                                            )}
                                        </ErrorMessage>

                                        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                                            <Text style={styles.buttonText}>{t("components.modals.forgotPasswordModal.button.send")}</Text>
                                        </TouchableOpacity>
                                    </>
                                )}
                            </Formik >
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View >
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 16,
        color: '#555',
        width: 250,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 16,
        borderColor: '#D9D9D9',
        height: 60,
        marginBottom: 12,
        width: 250,
        fontSize: 16,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#158F97',
        width: 250,
        borderRadius: 16,
        paddingVertical: 8,
        marginTop: 14,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalTitle: {
        fontSize: 20,
        color: '#434343',
        marginBottom: 20,
    },
    modalSmallText: {
        color: '#9D9D9D',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 20,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ForgotPasswordModal;