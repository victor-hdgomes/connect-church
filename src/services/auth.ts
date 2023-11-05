import { LoginFormValues, ResponseLogin, RegisterFormValues, ResponseRegister, EditProfessionalProfileFormValues, ResponseEditProfessionalProfile } from "@/interfaces";

export function signIn(values: LoginFormValues): Promise<ResponseLogin> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'sddsfbwgewtgewgwrgegqegeg',
                user: {
                    name: 'Diego',
                    email: values.email,
                    level: 'church',
                }
            })
        }, 2000)
    })
}

export function register(values: RegisterFormValues): Promise<ResponseRegister> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'sddsfbwgewtgewgwrgegqegeg',
                user: {
                    name: values.name,
                    email: values.email,
                    level: values.level,
                }
            })
        }, 2000)
    })
}

export function editProfessionalUser(values: EditProfessionalProfileFormValues): Promise<ResponseEditProfessionalProfile> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'sddsfbwgewtgewgwrgegqegeg',
                user: {
                    name: values.name,
                    email: values.email,
                }
            })
        }, 2000)
    })
}