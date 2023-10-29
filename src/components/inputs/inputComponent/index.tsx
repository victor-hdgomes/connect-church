import React from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Field, ErrorMessage, FieldProps } from 'formik';

export const InputComponent: React.FC<{ name: string; label: string; placeholder?: string; secureTextEntry?: boolean }> = ({ name, label, placeholder, secureTextEntry }) => (
  <View>
    <Text style={styles.title}>{label}</Text>
    <Field name={name}>
      {({ field }: FieldProps<string>) => (
        <TextInput
          {...field}
          placeholder={placeholder && placeholder}
          style={styles.input}
          secureTextEntry={secureTextEntry || false}
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
