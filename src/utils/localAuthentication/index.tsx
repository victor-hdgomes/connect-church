import * as LocalAuthentication from 'expo-local-authentication'
import { Alert } from 'react-native'

export async function handleAuthentication() {
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync()

    if (!isBiometricEnrolled) {
        return Alert.alert('Autenticação', 'Nenhuma biometria encontrada. Por favor cadastre no dispositivo')
    }

    return await LocalAuthentication.authenticateAsync()
}