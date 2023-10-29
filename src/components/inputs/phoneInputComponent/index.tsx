import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Field, ErrorMessage, FieldProps } from 'formik';
import { TextInputMask } from 'react-native-masked-text'

export const PhoneInputComponent: React.FC<{ name: string; label: string }> = ({ name, label }) => (
    <View>
        <Text style={styles.title}>{label}</Text>
        <Field name={name}>
            {({ field }: FieldProps<string>) => (
                <TextInputMask
                    {...field}
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    placeholder="(00) 00000-0000"
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={field.onChange(`${name}`)}
                    onBlur={field.onBlur(`${name}`)}
                />
            )}
        </Field>
        <ErrorMessage name={name}>
            {(errorMsg) => (
                <Text style={styles.errorText}>{errorMsg}</Text>
            )}
        </ErrorMessage>
    </View>
);

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 16,
        borderColor: '#D9D9D9',
        height: 60,
        marginBottom: 12,
        fontSize: 16,
        justifyContent: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
});
