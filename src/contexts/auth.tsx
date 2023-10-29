import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '@/services/api';
import * as auth from '@/services/auth';
import { AuthProviderProps, User, AuthContextData } from '@/interfaces';
import { LoginFormValues, RegisterFormValues, EditProfessionalProfileFormValues } from '@/interfaces';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function loadStorageData() {
            setLoading(true)
            const storageUser = await AsyncStorage.getItem('@connectChurch:user');
            const storageToken = await AsyncStorage.getItem('@connectChurch:token');

            api.defaults.headers.Authorization = `Bearer ${storageToken}`

            if (storageUser && storageToken) {
                setUser(JSON.parse(storageUser));
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        loadStorageData();
    }, []);

    async function signIn(values: LoginFormValues) {
        setLoading(true)
        const response = await auth.signIn(values);

        setUser(response.user);

        api.defaults.headers.Authorization = `Bearer ${response.token}`

        await AsyncStorage.setItem('@connectChurch:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@connectChurch:token', response.token);
        setLoading(false)
    }

    async function register(values: RegisterFormValues) {
        setLoading(true)
        const response = await auth.register(values);

        setUser(response.user);

        api.defaults.headers.Authorization = `Bearer ${response.token}`

        await AsyncStorage.setItem('@connectChurch:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@connectChurch:token', response.token);
        setLoading(false)
    }

    async function editProfessionalUser(values: EditProfessionalProfileFormValues) {
        setLoading(true)
        const response = await auth.editProfessionalUser(values);

        console.log('a', response)

        // COLOCAR MODAL DE SUCESSO OU ERRO AO ALTERAR

        setLoading(false)
    }

    function signOut() {
        setLoading(true)
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
        setLoading(false)
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut, register, editProfessionalUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context;
}