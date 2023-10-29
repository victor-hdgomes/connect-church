import React from "react";
import { StyleSheet, View, TextInput } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';

export const SearchFilterInputComponent: React.FC<{ onOpen: () => void, placeholder: string }> = ({ placeholder, onOpen }) => (
  <View style={styles.search}>
    <View style={styles.searchInputContainer} >
      <View style={styles.searchInput}>
        <Icon name="search1" size={20} color="#9D9D9D" style={{ marginRight: 8 }} />
        <TextInput
          placeholder={placeholder}
        />
      </View>
    </View>
    <TouchableOpacity onPress={onOpen} style={styles.filterContainer}>
      <Icon name="filter" size={24} color="#fff" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between'
  },
  searchInputContainer: {
    width: '85%',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  filterContainer: {
    backgroundColor: '#158F97',
    padding: 8,
    borderRadius: 50
  }
});
