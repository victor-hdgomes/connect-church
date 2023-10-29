import React from "react";
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const SearchInputComponent: React.FC<{ placeholder: string }> = ({ placeholder }) => (
  <View style={styles.search}>
    <View style={styles.searchInputContainer}>
      <Icon name="search1" size={20} color="#9D9D9D" style={{ marginRight: 8 }} />
      <TextInput
        placeholder={placeholder}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    marginVertical: 16
  },
  searchInputContainer: {
    flexDirection: 'row',
      alignItems: 'center'
  },
});
