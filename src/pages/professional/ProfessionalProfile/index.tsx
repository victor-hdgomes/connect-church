import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { Divider } from "react-native-elements/dist/divider/Divider";
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { TextWithLimit } from "@/components/elements/textWithLimit";
import { CategoryServiceItem } from "@/components/elements/categoryServiceItem";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function ProfessionalProfile() {
  const { t } = useTranslation();
  
  const [isShowCategory, setIsShowCategory] = useState(true)
  const [isShowSubcategory, setIsShowSubcategory] = useState(false)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://cdn.pixabay.com/photo/2018/10/04/11/37/woman-3723444_1280.jpg' }}
        style={styles.imageBackground}
      >
        <View style={styles.shadow}></View>
      </ImageBackground>

      <ScrollView style={styles.textContainer}>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Doce da Vovó</Text>
            <Icon name="verified" size={22} color="#158F97" />
          </View>
          <Text style={styles.subtitle}>Confeitaria</Text>
        </View>

        <Divider style={{ marginVertical: 20 }} />

        <View style={styles.section}>
          <Text style={styles.descriptionText}>{t("professionalPages.professionalProfile.description")}</Text>
          <TextWithLimit
            text="Em nossa confeitaria caseira, transformamos bolos personalizados em verdadeiras obras-primas culinárias. Cada fatia Em nossa confeitaria caseira, transformamos bolos personalizados em verdadeiras obras-primas culinárias. Cada fatia"
            characterLimit={116}
          />
        </View>

        <View style={styles.section}>
          <CategoryServiceItem icon="MaterialCommunityIcons" iconName="silverware-variant" category="Gastronomia" isShowCategory={isShowCategory} setIsShowCategory={setIsShowCategory} />

          <CategoryServiceItem icon="MaterialIcons" iconName="cleaning-services" category="Limpeza e organização" isShowCategory={isShowSubcategory} setIsShowCategory={setIsShowSubcategory} />
        </View>

        <View style={styles.section}>
          <Text style={styles.regulationsTitle}>{t("professionalPages.professionalProfile.regulations")}</Text>

          <View>
            <TouchableOpacity style={styles.regulationsItem}>
              <Text style={styles.regulationsText}>{t("professionalPages.professionalProfile.initialInformation")}</Text>
              <IconEntypo name="chevron-down" size={26} color="#c4c4c4" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.regulationsItem}>
              <Text style={styles.regulationsText}>{t("professionalPages.professionalProfile.servicesProvision")}</Text>
              <IconEntypo name="chevron-down" size={26} color="#c4c4c4" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.regulationsItem}>
              <Text style={styles.regulationsText}>{t("professionalPages.professionalProfile.helpWithTheApp")}</Text>
              <IconEntypo name="chevron-down" size={26} color="#c4c4c4" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <IconFontAwesome name="whatsapp" size={20} color="#fff" />
          <Text style={styles.buttonText}>{t("professionalPages.professionalProfile.sendMessage")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    paddingBottom: 80,
  },
  imageBackground: {
    flex: .5,
  },
  shadow: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  textContainer: {
    flex: 4,
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 33,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    position: 'absolute',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '100%',
    backgroundColor: '#fff',
    bottom: 0,
    paddingVertical: 16,
    paddingHorizontal: 20
  },
  button: {
    paddingVertical: 18,
    flexDirection: 'row',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#158F97'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    letterSpacing: .64,
    fontSize: 16,
    marginLeft: 8
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    color: '#262626',
    fontSize: 22,
    marginRight: 10,
    fontWeight: '700',
    letterSpacing: .88
  },
  subtitle: {
    color: '#7B7B7B',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: .64
  },
  section: {
    marginBottom: 46
  },
  descriptionText: {
    color: '#7B7B7B',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: .56,
    textTransform: 'uppercase',
    marginBottom: 12
  },
  regulationsTitle: {
    color: '#7B7B7B',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: .56,
    textTransform: 'uppercase',
    marginBottom: 12
  },
  regulationsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  regulationsText: {
    paddingVertical: 16,
    color: '#434343',
    fontSize: 14,
    letterSpacing: .56
  }
});
