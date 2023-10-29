import React, { useCallback, useRef } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { SearchFilterInputComponent } from "@/components/inputs/searchFilterInputComponent";
import { ScrollView } from "react-native-gesture-handler";
import { Modalize } from 'react-native-modalize'

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

import { CompaniesCarousel } from "@/components/carousel/companiesCarousel";
import { RecentProfessionalsCarousel } from "@/components/carousel/recentProfessionalsCarousel";
import { MessageOfTheDayCarousel } from "@/components/carousel/messageOfTheDayCarousel";

import { SearchFilter } from "@/components/modalize/searchFilter";

export default function Home() {
  const { t } = useTranslation();

  const productsCarouselData = [
    {
      image: 'https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg',
      title: 'Confeitaria',
      schedules: '74 agendamentos'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_1280.jpg',
      title: 'Manutenção',
      schedules: '49 agendamentos'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg',
      title: 'Confeitaria',
      schedules: '74 agendamentos'
    },
  ]

  const RecentProfessionalsCarouselData = [
    {
      image: 'https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg',
      avatar: 'https://cdn.pixabay.com/photo/2018/10/04/11/37/woman-3723444_1280.jpg',
      name: 'Letícia Antunes',
      profession: 'Confeiteira'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg',
      avatar: 'https://cdn.pixabay.com/photo/2018/10/04/11/37/woman-3723444_1280.jpg',
      name: 'Letícia Antunes',
      profession: 'Confeiteira'
    },
  ]

  const messageOfTheDayCarouselData = [
    {
      image: 'https://cdn.pixabay.com/photo/2020/04/24/17/23/blessing-5087820_1280.jpg',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/08/22/01/39/hands-423794_1280.jpg',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/04/03/18/56/font-705667_1280.jpg',
    },
  ]

  const modalizeRef = useRef<Modalize | null>(null);

  const onOpen = useCallback(() => {
    modalizeRef.current?.open()
  }, [modalizeRef])

  return (
    <View style={styles.container}>
      <SearchFilterInputComponent onOpen={onOpen} placeholder={t("customerPages.home.search.placeholder")} />

      <ScrollView>
        <CompaniesCarousel data={productsCarouselData} />
        <MessageOfTheDayCarousel data={messageOfTheDayCarouselData} />
        <RecentProfessionalsCarousel data={RecentProfessionalsCarouselData} />
        <Text>Agenda em destaque</Text>
      </ScrollView>

      <SearchFilter modalizeRef={modalizeRef} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
