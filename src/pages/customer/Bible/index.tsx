import { SelectComponent } from "@/components/inputs/selectComponent";
import { BibleSearchFormValues } from "@/interfaces";
import createValidationSchemas from "@/schemas";
import * as Animatable from 'react-native-animatable';
import { Formik } from "formik";
import React, { useState, useMemo, useCallback } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Divider } from "react-native-elements";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function Bible() {
  const { t, i18n } = useTranslation();
  
  const [verseText, setVerseText] = useState("");

  const { BibleSearchValidationSchema } = createValidationSchemas()

  const bookOptions = useMemo(() => [
    { label: "Gênesis", value: "Gen" },
  ], []);

  const chapterOptions = useMemo(() => [
    { label: "Capítulo 1", value: "1" },
  ], []);

  const verseOptions = useMemo(() => [
    { label: "Versículo 1", value: "1" },
    { label: "Versículo 2", value: "2" },
  ], []);

  const handleFetchVerse = useCallback((values: BibleSearchFormValues) => {
    let apiUrl = '';

    if (values.verse === "") {
      apiUrl = `https://bible-api.com/${values.book}+${values.chapter}?translation=${t(`customerPages.bible.language.${i18n.language}`)}`;
    } else {
      apiUrl = `https://bible-api.com/${values.book}+${values.chapter}:${values.verse}?translation=${t(`customerPages.bible.language.${i18n.language}`)}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setVerseText(data.text);
      })
      .catch(() => {
        setVerseText(`${t("customerPages.bible.fetch.error")}`);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          book: '',
          chapter: '',
          verse: '',
        }}
        validationSchema={BibleSearchValidationSchema}
        onSubmit={handleFetchVerse}
      >
        {({ handleSubmit }) => (
          <ScrollView style={styles.container}>
            <SelectComponent name="book" label={t("customerPages.bible.book")} items={bookOptions} />

            <SelectComponent name="chapter" label={t("customerPages.bible.chapter")} items={chapterOptions} />

            <SelectComponent name="verse" label={t("customerPages.bible.verse")} items={verseOptions} />

            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>{t("customerPages.bible.search")}</Text>
            </TouchableOpacity>

            <Divider />

            {verseText ? (
              <>
                <Text style={styles.information}>{t("customerPages.bible.result")}</Text>
                <Text style={styles.verseText}>{verseText}</Text>
              </>
            ) : (
              <>
                <Animatable.View animation={'fadeIn'} delay={300} style={styles.containerHeader} >
                  <Image source={require('@/assets/character-search.png')} />
                </Animatable.View>
                <Text style={styles.noSearch}>{t("customerPages.bible.noSearch")}</Text>
              </>
            )}
          </ScrollView>
        )}
      </Formik>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: '#158F97',
    width: '100%',
    borderRadius: 16,
    paddingVertical: 8,
    marginTop: 14,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  information: {
    textTransform: 'uppercase',
    color: '#7b7b7b',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: .56,
    marginVertical: 12
  },
  verseText: {
    color: '#000',
    fontWeight: '400',
    fontSize: 22
  },
  noSearch: {
    color: '#7b7b7b',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center'
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
});
