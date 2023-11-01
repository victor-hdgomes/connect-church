import React, { useCallback, useRef } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Modalize } from 'react-native-modalize'
import { FAB } from 'react-native-elements';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

import Icon from 'react-native-vector-icons/FontAwesome';
import { AddSchedule } from "@/components/modalize/addSchedule";
import { ScheduleListItem } from "@/components/elements/scheduleListItem";
import { ScrollView } from "react-native-gesture-handler";
import { ScheduleItem } from "@/components/modalize/scheduleItem";

export default function Schedule() {
  const { t } = useTranslation();

  const modalizeRef = useRef<Modalize | null>(null);
  const scheduleItemRef = useRef<Modalize | null>(null);

  const onOpen = useCallback(() => {
    modalizeRef.current?.open()
  }, [modalizeRef])

  const onScheduleItemOpen = useCallback(() => {
    scheduleItemRef.current?.open()
  }, [scheduleItemRef])

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={[styles.month, { marginTop: 0 }]}>Outubro</Text>
        <ScheduleListItem onPress={onScheduleItemOpen} title="Teste teste teste" />
        <Text style={styles.month}>Dezembro</Text>
        <ScheduleListItem onPress={onScheduleItemOpen} title="Teste teste teste" />
        <ScheduleListItem onPress={onScheduleItemOpen} title="Teste teste teste" />
      </ScrollView>

      <ScheduleItem modalizeRef={scheduleItemRef} />
      <AddSchedule modalizeRef={modalizeRef} />

      <FAB
        icon={<Icon style={styles.iconFabStyle} name="plus" size={20} color="#fff" />}
        style={styles.fab}
        buttonStyle={styles.buttonFabStyle}
        onPress={() => onOpen()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  iconFabStyle: {
    textAlign: 'center'
  },
  buttonFabStyle: {
    backgroundColor: '#158F97'
  },
  month: {
    marginLeft: 20,
    textTransform: 'uppercase',
    color: '#7b7b7b',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: .56,
    marginTop: 20
  }
});
