import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useAuth } from "@/contexts/auth";
import { Formik, FormikHelpers } from 'formik';
import ForgotPasswordModal from "@/components/modals/forgotPasswordModal";
import { LoginFormValues } from "@/interfaces";
import { createValidationSchemas } from "@/schemas";
import { InputComponent } from "@/components/inputs/inputComponent";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function LoginTemplate() {
    const { t } = useTranslation();

    const { LoginValidationSchema } = createValidationSchemas()

    const { signIn } = useAuth()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSignIn = (values: LoginFormValues) => {
        signIn(values);
    }

    return (
        <>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginValidationSchema}
                onSubmit={handleSignIn}
            >
                {({ handleSubmit }) => (
                    <ScrollView style={styles.container}>
                        <Text style={styles.loginData}>{t("components.templates.loginTemplate.loginData")}</Text>

                        <InputComponent name="email" label={t("components.templates.loginTemplate.email")} placeholder={t("components.templates.loginTemplate.emailPlaceholder")} />

                        <InputComponent name="password" label={t("components.templates.loginTemplate.password")} placeholder={t("components.templates.loginTemplate.passwordPlaceholder")} secureTextEntry={true} />

                        <Text onPress={() => setIsModalVisible(!isModalVisible)} style={styles.forgotPassword}>{t("components.templates.loginTemplate.forgotPassword")}</Text>

                        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                            <Text style={styles.buttonText}>{t("components.templates.loginTemplate.button.signIn")}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                )}
            </Formik >
            <ForgotPasswordModal
                open={isModalVisible}
                onCancel={() => setIsModalVisible(!isModalVisible)}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    forgotPassword: {
        paddingVertical: 2,
        fontSize: 12,
        color: '#158F97',
        textAlign: 'right',
    },
    divider: {
        borderWidth: 1,
        borderColor: '#E9E9E9',
        marginVertical: 16,
    },
    title: {
        fontSize: 16,
        color: '#555',
    },
    button: {
        backgroundColor: '#158F97',
        width: '100%',
        borderRadius: 16,
        paddingVertical: 8,
        marginTop: 14,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    loginData: {
        color: '#9D9D9D',
        textTransform: 'uppercase',
        fontWeight: '800',
        paddingBottom: 16,
        paddingTop: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
});
