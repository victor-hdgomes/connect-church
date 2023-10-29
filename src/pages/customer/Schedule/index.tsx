import React from "react";
import { StyleSheet, View } from 'react-native';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function Schedule() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
