import React, { useCallback, useRef } from "react";
import { StyleSheet, View } from 'react-native';
import { Modalize } from 'react-native-modalize'
import { FAB } from 'react-native-elements';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

import Icon from 'react-native-vector-icons/FontAwesome';
import { AddSchedule } from "@/components/modalize/addSchedule";

export default function Schedule() {
  const { t } = useTranslation();

  const modalizeRef = useRef<Modalize | null>(null);

  const onOpen = useCallback(() => {
    modalizeRef.current?.open()
  }, [modalizeRef])

  return (
    <View style={styles.container}>
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
  }
});
