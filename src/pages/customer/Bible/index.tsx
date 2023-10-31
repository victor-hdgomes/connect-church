import { SelectComponent } from "@/components/inputs/selectComponent";
import { BibleSearchFormValues } from "@/interfaces";
import createValidationSchemas from "@/schemas";
import * as Animatable from 'react-native-animatable';
import { Formik } from "formik";
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import * as Speech from 'expo-speech';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function Bible() {
  const { t, i18n } = useTranslation();
  const [verseText, setVerseText] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);

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

  const handleSpeak = useCallback(() => {
    if (!speaking) {
      Speech.speak(verseText, {
        language: 'pt-BR',
        onDone: () => setSpeaking(false),
        onStart: () => setSpeaking(true),
        onPause: () => setPaused(true),
        onResume: () => setPaused(false),
      });
    } else if (paused) {
      Speech.resume();
      setPaused(false);
    } else {
      Speech.pause();
      setPaused(true);
    }
  }, [verseText, speaking, paused]);

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

  useEffect(() => {
    return () => {
      Speech.stop();
    };
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

            {verseText && (
              <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={handleSpeak}>
                  <Icon name={paused ? "play-arrow" : speaking ? "pause" : "speaker-phone"} size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                  <Icon name="bookmark-border" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                  <Icon name="share" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            )}

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
    marginVertical: 14,
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
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  action: {
    backgroundColor: '#158F97',
    padding: 20,
    borderRadius: 50
  }
});
