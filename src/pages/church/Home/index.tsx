import React, { useCallback, useRef } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Modalize } from 'react-native-modalize'
import Icon from 'react-native-vector-icons/FontAwesome5';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation();

  const modalizeRef = useRef<Modalize | null>(null);

  const onOpen = useCallback(() => {
    modalizeRef.current?.open()
  }, [modalizeRef])

  const data = [
    { id: '1', text: 'Aniversariante do dia', icon: 'birthday-cake' },
    { id: '2', text: 'Mensagem rápida', icon: 'bolt' },
    { id: '3', text: 'Envio de versículo', icon: 'bible' },
    { id: '4', text: 'Departamentos', icon: 'network-wired' },
    { id: '5', text: 'Notificações', icon: 'bell' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Icon name={item.icon} size={50} color="#fff" />
      <Text style={styles.itemText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  itemContainer: {
    backgroundColor: '#158F97',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '48%',
    marginHorizontal: '1%',
    marginVertical: 4
  },
  itemText: {
    textAlign: 'center',
    marginTop: 4,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});
