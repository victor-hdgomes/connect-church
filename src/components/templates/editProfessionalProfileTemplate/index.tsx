import React from "react";
import { StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from "@/contexts/auth";
import { Formik, Field, ErrorMessage, FormikHelpers, FieldProps } from 'formik';
import { EditProfessionalProfileFormValues } from "@/interfaces";
import { createValidationSchemas } from "@/schemas";
import { InputComponent } from "@/components/inputs/inputComponent";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'
import { SelectComponent } from "@/components/inputs/selectComponent";
import { DateInputComponent } from "@/components/inputs/dateInputComponent";
import { CpfInputComponent } from "@/components/inputs/cpfInputComponent";
import { PhoneInputComponent } from "@/components/inputs/phoneInputComponent";
import { CepInputComponent } from "@/components/inputs/cepInputComponent";
import { CheckBox } from "react-native-elements";

export default function EditProfessionalProfileTemplate() {
    const { t } = useTranslation();

    const { EditProfessionalValidationSchema } = createValidationSchemas()

    const { editProfessionalUser } = useAuth()

    const handleEditProfessionalProfile = (values: EditProfessionalProfileFormValues) => {
        editProfessionalUser(values)
    }

    // ALTERAR ESSES DADOS
    const genderItems = [
        { label: t("components.templates.registerTemplate.gender.male"), value: "Masculino" },
        { label: t("components.templates.registerTemplate.gender.female"), value: "Feminino" },
    ];

    // ALTERAR ESSES DADOS
    const churchItems = [
        { label: "Batista", value: "Batista" },
        { label: "Assembléia", value: "Assembléia" },
    ];

    return (
        <>
            <Formik
                initialValues={{
                    professionalName: '',
                    description: '',
                    categories: '',
                    subcategories: '',
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
                }}
                validationSchema={EditProfessionalValidationSchema}
                onSubmit={handleEditProfessionalProfile}
            >
                {({ handleSubmit }) => (
                    <ScrollView style={styles.container}>
                        <Text style={styles.professionalData}>{t("components.templates.editProfessionalProfileTemplate.professionalData")}</Text>

                        <InputComponent name="professionalName" label={t("components.templates.editProfessionalProfileTemplate.professionalName")} placeholder={t("components.templates.editProfessionalProfileTemplate.professionalNamePlaceholder")} />

                        <InputComponent name="description" label={t("components.templates.editProfessionalProfileTemplate.description")} placeholder={t("components.templates.editProfessionalProfileTemplate.descriptionPlaceholder")} />

                        <SelectComponent name="categories" label={t("components.templates.editProfessionalProfileTemplate.categories")} items={genderItems} />

                        <SelectComponent name="subcategories" label={t("components.templates.editProfessionalProfileTemplate.subcategories")} items={genderItems} />

                        <View style={styles.divider} />

                        <Text style={styles.information}>{t("components.templates.editProfessionalProfileTemplate.churchData")}</Text>

                        <SelectComponent name="church" label={t("components.templates.editProfessionalProfileTemplate.select")} items={churchItems} />

                        <Text style={styles.information}>{t("components.templates.editProfessionalProfileTemplate.personalData")}</Text>

                        <InputComponent name="name" label={t("components.templates.editProfessionalProfileTemplate.personalDataName")} placeholder={t("components.templates.editProfessionalProfileTemplate.professionalNamePlaceholder")} />

                        <DateInputComponent name="birthdate" label={t("components.templates.editProfessionalProfileTemplate.personalDataBirthdate")} />

                        <CpfInputComponent name="cpf" label={t("components.templates.editProfessionalProfileTemplate.personalDataCpf")} />

                        <SelectComponent name="gender" label={t("components.templates.editProfessionalProfileTemplate.personalDataGender")} items={genderItems} />

                        <View style={styles.divider} />

                        <Text style={styles.information}>{t("components.templates.editProfessionalProfileTemplate.contactDetails")}</Text>

                        <PhoneInputComponent name="phone" label={t("components.templates.editProfessionalProfileTemplate.contactDetailsPhone")} />

                        <InputComponent name="email" label={t("components.templates.editProfessionalProfileTemplate.contactDetailsEmail")} placeholder={t("components.templates.editProfessionalProfileTemplate.contactDetailsEmailPlaceholder")} />

                        <InputComponent name="password" label={t("components.templates.editProfessionalProfileTemplate.contactDetailsPassword")} placeholder={t("components.templates.editProfessionalProfileTemplate.contactDetailsPasswordPlaceholder")} secureTextEntry={true} />
                        
                        <View style={styles.divider} />

                        <Text style={styles.information}>{t("components.templates.editProfessionalProfileTemplate.locationData")}</Text>

                        <CepInputComponent name="zipcode" label={t("components.templates.editProfessionalProfileTemplate.locationDataZipcode")} />

                        <InputComponent name="address" label={t("components.templates.editProfessionalProfileTemplate.locationDataAddress")} />

                        <InputComponent name="neighborhood" label={t("components.templates.editProfessionalProfileTemplate.locationDataNeighborhood")} />

                        <InputComponent name="number" label={t("components.templates.editProfessionalProfileTemplate.locationDataNumber")} />

                        <InputComponent name="city" label={t("components.templates.editProfessionalProfileTemplate.locationDataCity")} />

                        <InputComponent name="state" label={t("components.templates.editProfessionalProfileTemplate.locationDataState")} />

                        <InputComponent name="complement" label={t("components.templates.editProfessionalProfileTemplate.locationDataComplement")} />

                        <Field name="acceptTerms">
                            {({ field, form }: FieldProps) => (
                                <CheckBox
                                    containerStyle={{ width: '100%', marginStart: 0 }}
                                    checkedColor="#158F97"
                                    title={t("components.templates.editProfessionalProfileTemplate.checkbox.title")}
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
                            <Text style={styles.buttonText}>{t("components.templates.editProfessionalProfileTemplate.saveButton")}</Text>
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
    divider: {
        borderWidth: 1,
        borderColor: '#E9E9E9',
        marginVertical: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    professionalData: {
        color: '#9D9D9D',
        textTransform: 'uppercase',
        fontWeight: '800',
        paddingTop: 50,
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
