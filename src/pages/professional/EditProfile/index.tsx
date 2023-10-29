import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { Divider } from "react-native-elements/dist/divider/Divider";
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { TextWithLimit } from "@/components/elements/textWithLimit";
import { CategoryServiceItem } from "@/components/elements/categoryServiceItem";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import RegisterTemplate from "@/components/templates/registerTemplate";
import EditProfessionalProfileTemplate from "@/components/templates/editProfessionalProfileTemplate";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function EditProfile() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://cdn.pixabay.com/photo/2018/10/04/11/37/woman-3723444_1280.jpg' }}
        style={styles.imageBackground}
      >
        <View style={styles.shadow}>
          <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end', flex: 1, padding: 12 }}>
            <Icon name="edit" size={20} color="#fff" />
          </View>
        </View>
      </ImageBackground>



      <View style={{
        width: 96, borderRadius: 50, borderWidth: 1.5, borderColor: '#fff', height: 96, position: 'absolute', top: 170, zIndex: 2,
        left: '50%', transform: [{ translateX: -50 }, { translateY: -50 }],
      }}>
        <ImageBackground
          source={{ uri: 'https://cdn.pixabay.com/photo/2018/10/04/11/37/woman-3723444_1280.jpg' }}
          style={styles.avatar}
        >
          <View style={styles.shadow}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Icon name="edit" size={20} color="#fff" />
            </View>
          </View>
        </ImageBackground>
      </View>

      <ScrollView style={styles.textContainer}>
        <EditProfessionalProfileTemplate />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  imageBackground: {
    flex: .3,
  },
  shadow: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2
  },
  textContainer: {
    flex: 4,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    flex: 1,
    borderRadius: 50,
    overflow: 'hidden',
  },
});
