import React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useAuth } from "@/contexts/auth";
import { Formik, Field, ErrorMessage, FormikHelpers, FieldProps } from 'formik';
import { RegisterFormValues } from "@/interfaces";
import { createValidationSchemas } from "@/schemas";
import { InputComponent } from "@/components/inputs/inputComponent";
import { SelectComponent } from "@/components/inputs/selectComponent";
import { CepInputComponent } from "@/components/inputs/cepInputComponent";
import { PhoneInputComponent } from "@/components/inputs/phoneInputComponent";
import { CpfInputComponent } from "@/components/inputs/cpfInputComponent";
import { DateInputComponent } from "@/components/inputs/dateInputComponent";
import Slider from '@react-native-community/slider';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function RegisterTemplate() {
    const { t } = useTranslation();

    const { RegisterValidationSchema } = createValidationSchemas()

    const { register } = useAuth()

    const handleRegister = (values: RegisterFormValues, actions: FormikHelpers<RegisterFormValues>) => {
        register(values);
    }

    const churchItems = [
        { label: "Batista", value: "Batista" },
        { label: "Assembléia", value: "Assembléia" },
    ];

    const genderItems = [
        { label: t("components.templates.registerTemplate.gender.male"), value: "Masculino" },
        { label: t("components.templates.registerTemplate.gender.female"), value: "Feminino" },
    ];

    return (
        <>
            <Formik
                initialValues={{
                    church: '',
                    name: '',
                    birthdate: '',
                    cpf: '',
                    gender: '',
                    phone: '',
                    email: '',
                    password: '',
                    zipcode: '',
                    address: '',
                    neighborhood: '',
                    number: '',
                    city: '',
                    state: '',
                    complement: '',
                    acceptTerms: true,
                    distance: 0,
                    level: ''
                }}
                validationSchema={RegisterValidationSchema}
                onSubmit={handleRegister}
            >
                {({ handleSubmit }) => (
                    <ScrollView style={styles.container}>
                        <Text style={styles.churchData}>{t("components.templates.registerTemplate.churchData")}</Text>

                        <SelectComponent name="church" label={t("components.templates.registerTemplate.select.placeholder")} items={churchItems} />

                        <Text style={styles.information}>{t("components.templates.registerTemplate.distance")}</Text>

                        <Field name="distance">
                            {({ field, form }: FieldProps<number>) => (
                                <>
                                    <Text style={styles.sliderInformation}>{t("components.templates.registerTemplate.sliderInformation")} {field.value}{t("components.templates.registerTemplate.meters")}</Text>
                                    <Slider
                                        style={{ width: '100%', height: 40 }}
                                        minimumValue={50}
                                        maximumValue={20000}
                                        minimumTrackTintColor="#158F97"
                                        maximumTrackTintColor="#F5F5F5"
                                        thumbTintColor="#158F97"
                                        step={50}
                                        value={field.value}
                                        onValueChange={(sliderValue) => form.setFieldValue('distance', sliderValue)}
                                    />
                                </>
                            )}
                        </Field>
                        <View style={styles.slider}>
                            <Text style={styles.sliderText}>{t("components.templates.registerTemplate.sliderText.minimum")}</Text>
                            <Text style={styles.sliderText}>{t("components.templates.registerTemplate.sliderText.maximum")}</Text>
                        </View>
                        <ErrorMessage name="distance">
                            {(errorMsg) => (
                                <Text style={styles.errorText}>{errorMsg}</Text>
                            )}
                        </ErrorMessage>

                        <View style={styles.divider} />

                        <Text style={styles.information}>{t("components.templates.registerTemplate.personalData")}</Text>

                        <InputComponent name="name" label={t("components.templates.registerTemplate.personalDataName")} placeholder={t("components.templates.registerTemplate.personalDataNamePlaceholder")} />

                        <DateInputComponent name="birthdate" label={t("components.templates.registerTemplate.personalDataBirthdate")} />

                        <CpfInputComponent name="cpf" label={t("components.templates.registerTemplate.personalDataCpf")} />

                        <SelectComponent name="gender" label={t("components.templates.registerTemplate.personalDataGender")} items={genderItems} />

                        <View style={styles.divider} />

                        <Text style={styles.information}>{t("components.templates.registerTemplate.contactDetails")}</Text>

                        <PhoneInputComponent name="phone" label={t("components.templates.registerTemplate.contactDetailsPhone")} />

                        <InputComponent name="email" label={t("components.templates.registerTemplate.contactDetailsEmail")} placeholder={t("components.templates.registerTemplate.contactDetailsEmailPlaceholder")} />

                        <InputComponent name="password" label={t("components.templates.registerTemplate.contactDetailsPassword")} placeholder={t("components.templates.registerTemplate.contactDetailsPasswordPlaceholder")} secureTextEntry={true} />

                        <View style={styles.divider} />

                        <Text style={styles.information}>{t("components.templates.registerTemplate.locationData")}</Text>

                        <CepInputComponent name="zipcode" label={t("components.templates.registerTemplate.locationDataZipcode")} />

                        <InputComponent name="address" label={t("components.templates.registerTemplate.locationDataAddress")} />

                        <InputComponent name="neighborhood" label={t("components.templates.registerTemplate.locationDataNeighborhood")} />

                        <InputComponent name="number" label={t("components.templates.registerTemplate.locationDataNumber")} />

                        <InputComponent name="city" label={t("components.templates.registerTemplate.locationDataCity")} />

                        <InputComponent name="state" label={t("components.templates.registerTemplate.locationDataState")} />

                        <InputComponent name="complement" label={t("components.templates.registerTemplate.locationDataComplement")} />

                        <Field name="acceptTerms">
                            {({ field, form }: FieldProps) => (
                                <CheckBox
                                    containerStyle={{ width: '100%', marginStart: 0 }}
                                    checkedColor="#158F97"
                                    title={t("components.templates.registerTemplate.checkbox.title")}
                                    checked={field.value}
                                    onPress={() => {
                                        form.setFieldValue('acceptTerms', !field.value);
                                    }}
                                />
                            )}
                        </Field>
                        <ErrorMessage name="acceptTerms">
                            {(errorMsg) => (
                                <Text style={styles.errorText}>{errorMsg}</Text>
                            )}
                        </ErrorMessage>

                        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                            <Text style={styles.buttonText}>{t("components.templates.registerTemplate.finalizeRegistration")}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                )}
            </Formik >
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    divider: {
        borderWidth: 1,
        borderColor: '#E9E9E9',
        marginVertical: 16,
    },
    button: {
        backgroundColor: '#158F97',
        width: '100%',
        borderRadius: 16,
        paddingVertical: 8,
        marginTop: 14,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    churchData: {
        color: '#9D9D9D',
        textTransform: 'uppercase',
        fontWeight: '800',
        paddingTop: 16,
        paddingBottom: 16,
    },
    information: {
        color: '#9D9D9D',
        textTransform: 'uppercase',
        fontWeight: '800',
        paddingBottom: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
    slider: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sliderText: {
        color: '#555',
        fontSize: 14,
    },
    sliderInformation: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555'
    }
});
