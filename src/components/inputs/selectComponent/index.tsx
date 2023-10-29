import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Field, ErrorMessage, FieldProps } from 'formik';
import RNPickerSelect from "react-native-picker-select";

export const SelectComponent: React.FC<{ name: string; label: string; items: { label: string; value: string }[]; }> = ({ name, label, items }) => (
  <View>
    <Text style={styles.title}>{label}</Text>
    <View style={styles.input}>
      <Field name={`${name}`}>
        {({ field }: FieldProps<string>) => (
          <RNPickerSelect
            onValueChange={(value) => {
              field.onChange(`${name}`)(value);
            }}
            items={items}
          />
        )}
      </Field>
    </View>
    <ErrorMessage name={`${name}`}>
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
