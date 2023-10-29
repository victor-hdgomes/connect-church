import React, { useCallback, useRef } from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ArrowListItem } from "@/components/elements/arrowListItem";
import { Modalize } from 'react-native-modalize'
import { ChangeAccount } from "@/components/modalize/changeAccount";
import { useAuth } from "@/contexts/auth";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function Settings() {
  const { t } = useTranslation();

  const { user, signOut } = useAuth()

  const navigation = useNavigation();

  const goToEditProfile = useCallback(() => {
    // @ts-expect-error
    navigation.navigate('EditProfile')
  }, [navigation])

  const modalizeRef = useRef<Modalize | null>(null);

  const onOpen = useCallback(() => {
    modalizeRef.current?.open()
  }, [modalizeRef])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("customerPages.settings.myProfile")}</Text>

      <View style={styles.cardContainer}>
        <View style={styles.content}>
          <View style={styles.leftContent}>
            <View style={styles.avatarContainer}>
              <ImageBackground
                source={{ uri: 'https://cdn.pixabay.com/photo/2018/10/04/11/37/woman-3723444_1280.jpg' }}
                style={styles.avatar}
              />
            </View>
            <View>
              <Text style={styles.titleProfile}>{t(`customerPages.settings.accountType.${user?.level}`)}</Text>
              <Text style={styles.nameProfile}>Marcio Silveiras</Text>
              <Text style={styles.professionProfile}>Mercearia do Padrinho</Text>
            </View>
          </View>
          <TouchableOpacity onPress={goToEditProfile}>
            <Icon name="edit" size={20} color="#158F97" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onOpen} style={styles.button}>
          <Text style={styles.buttonText}>{t("customerPages.settings.changeAccount")}</Text>
        </TouchableOpacity>
      </View>

      <ChangeAccount modalizeRef={modalizeRef} />

      <Text style={styles.title}>{t("customerPages.settings.settings")}</Text>
      <ScrollView>
        <ArrowListItem icon="question-circle" title={t("customerPages.settings.help")} subtitle={t("customerPages.settings.helpSubtitle")} />
        <ArrowListItem icon="shield-alt" title={t("customerPages.settings.terms")} subtitle={t("customerPages.settings.termsSubtitle")} />
        <ArrowListItem icon="sign-out-alt" title={t("customerPages.settings.signOut")} onPress={signOut} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  title: {
    marginHorizontal: 20,
    color: '#9D9D9D',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.12,
    textTransform: 'uppercase',
    marginBottom: 8
  },
  cardContainer: {
    marginHorizontal: 20,
    borderRadius: 16,
    backgroundColor: '#c4ecef3d',
    padding: 20,
    marginBottom: 48
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32
  },
  leftContent: {
    flexDirection: 'row'
  },
  avatar: {
    flex: 1,
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#fff',
    marginRight: 16
  },
  titleProfile: {
    color: '#7b7b7b',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
    textTransform: 'uppercase'
  },
  nameProfile: {
    color: '#262626',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1.28
  },
  professionProfile: {
    color: '#555',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: .48,
  },
  button: {
    paddingVertical: 18,
    flexDirection: 'row',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4ECEF'
  },
  buttonText: {
    color: '#1A6065',
    fontWeight: '700',
    letterSpacing: .64,
    fontSize: 16,
    marginLeft: 8
  },
});
