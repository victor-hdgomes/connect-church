import { ReactNode } from "react";

export interface ForgotPasswordModalProps {
    open: boolean;
    onCancel: () => void;
}

export interface LoginFormValues {
    email: string;
    password: string;
    level?: string;
}

export interface RegisterFormValues {
    church: string;
    name: string;
    birthdate: string;
    cpf: string;
    gender: string;
    phone: string;
    email: string;
    password: string;
    zipcode: string;
    address: string;
    neighborhood: string;
    number: string;
    city: string;
    state: string;
    complement: string;
    acceptTerms: boolean;
    distance: number;
    level: string;
}

export interface BibleSearchFormValues {
    book: string;
    chapter: string;
    verse: string;
}

export interface EditProfessionalProfileFormValues {
    professionalName: string;
    description: string;
    categories: string;
    subcategories: string;
    church: string;
    name: string;
    birthdate: string;
    cpf: string;
    gender: string;
    phone: string;
    email: string;
    password: string;
    zipcode: string;
    address: string;
    neighborhood: string;
    number: string;
    city: string;
    state: string;
    complement: string;
    acceptTerms: boolean;
}

export interface AuthProviderProps {
    children: ReactNode;
}

export interface User {
    name: string,
    email: string,
    level: string,
}

export interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    register(values: RegisterFormValues): Promise<void>;
    editProfessionalUser(values: EditProfessionalProfileFormValues): Promise<void>;
    signIn(values: LoginFormValues): Promise<void>;
    signOut(): void;
}

export interface ResponseLogin {
    token: string;
    user: {
        name: string;
        email: string;
        level: string;
    }
}

export interface ResponseRegister {
    token: string;
    user: {
        name: string;
        email: string;
        level: string;
    }
}

export interface ResponseEditProfessionalProfile {
    token: string;
    user: {
        name: string;
        email: string;
    }
}