import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export function createValidationSchemas() {
    const { t } = useTranslation();

    const BibleSearchValidationSchema = Yup.object().shape({
        book: Yup.string().required(t("schemas.required")),
        chapter: Yup.string().required(t("schemas.required")),
    });

    const RegisterValidationSchema = Yup.object().shape({
        church: Yup.string().required(t("schemas.required")),
        name: Yup.string().required(t("schemas.required")),
        birthdate: Yup.string().required(t("schemas.required")),
        cpf: Yup.string().required(t("schemas.required")),
        gender: Yup.string().required(t("schemas.required")),
        phone: Yup.string().required(t("schemas.required")),
        email: Yup.string().email(t("schemas.email")).required(t("schemas.required")),
        password: Yup.string().min(6, t("schemas.passwordCharacters")).required(t("schemas.required")),
        zipcode: Yup.string().required(t("schemas.required")),
        address: Yup.string().required(t("schemas.required")),
        neighborhood: Yup.string().required(t("schemas.required")),
        number: Yup.string().required(t("schemas.required")),
        city: Yup.string().required(t("schemas.required")),
        state: Yup.string().required(t("schemas.required")),
        complement: Yup.string().required(t("schemas.required")),
        acceptTerms: Yup.boolean().oneOf([true], t("schemas.acceptTerms")),
        distance: Yup.number().required(t("schemas.required")).min(50, t("schemas.minimunDistance"))
    });

    const EditProfessionalValidationSchema = Yup.object().shape({
        professionalName: Yup.string().required(t("schemas.required")),
        description: Yup.string().required(t("schemas.required")),
        categories: Yup.string().required(t("schemas.required")),
        subcategories: Yup.string().required(t("schemas.required")),
        church: Yup.string().required(t("schemas.required")),
        name: Yup.string().required(t("schemas.required")),
        birthdate: Yup.string().required(t("schemas.required")),
        cpf: Yup.string().required(t("schemas.required")),
        gender: Yup.string().required(t("schemas.required")),
        phone: Yup.string().required(t("schemas.required")),
        email: Yup.string().email(t("schemas.email")).required(t("schemas.required")),
        password: Yup.string().min(6, t("schemas.passwordCharacters")).required(t("schemas.required")),
        zipcode: Yup.string().required(t("schemas.required")),
        address: Yup.string().required(t("schemas.required")),
        neighborhood: Yup.string().required(t("schemas.required")),
        number: Yup.string().required(t("schemas.required")),
        city: Yup.string().required(t("schemas.required")),
        state: Yup.string().required(t("schemas.required")),
        complement: Yup.string().required(t("schemas.required")),
        acceptTerms: Yup.boolean().oneOf([true], t("schemas.acceptTerms")),
    })

    const LoginValidationSchema = Yup.object().shape({
        email: Yup.string().email(t("schemas.email")).required(t("schemas.required")),
        password: Yup.string().min(6, t("schemas.passwordCharacters")).required(t("schemas.required")),
    });

    const ForgotPasswordValidationSchema = Yup.object().shape({
        email: Yup.string().email(t("schemas.email")).required(t("schemas.required")),
    });

    return {
        BibleSearchValidationSchema,
        RegisterValidationSchema,
        EditProfessionalValidationSchema,
        LoginValidationSchema,
        ForgotPasswordValidationSchema,
    };
}

export default createValidationSchemas;
