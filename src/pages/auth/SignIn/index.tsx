import React, { useState, useMemo } from "react";
import { StyleSheet, View, useWindowDimensions, Image } from 'react-native';
import { TabView, SceneMap, TabBar, TabBarIndicator } from 'react-native-tab-view';
import * as Animatable from 'react-native-animatable';
import LoginTemplate from "@/components/templates/loginTemplate";
import RegisterTemplate from "@/components/templates/registerTemplate";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function SignIn() {
  const { t } = useTranslation();

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const routes = useMemo(() => [
    { key: 'login', title: t("authPages.signIn.signIn") },
    { key: 'register', title: t("authPages.signIn.register") },
  ], [t]);

  const LoginRoute = () => (
    <LoginTemplate />
  );

  const RegisterRoute = () => (
    <RegisterTemplate />
  );

  const renderScene = SceneMap({
    login: LoginRoute,
    register: RegisterRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      activeColor={'#158F97'}
      inactiveColor={'#7B7B7B'}
      style={{ marginTop: 25, backgroundColor: 'transparent', elevation: 0 }}
      pressColor={'#158F97'}
      renderIndicator={renderIndicator}
    />
  );

  const renderIndicator = (props: any) => (
    <TabBarIndicator
      {...props}
      style={{ backgroundColor: '#158F97' }}
    />
  );

  return (
    <View style={styles.container}>
      <Animatable.View animation={'fadeInLeft'} delay={500} style={styles.containerHeader} >
        <Image source={require('@/assets/logo-congregacao.png')} />
      </Animatable.View>

      <Animatable.View animation={'fadeInUp'} delay={500} style={styles.containerForm} >
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#158F97',
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 3,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 16,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderColor: '#D9D9D9',
    height: 60,
    marginBottom: 12,
    fontSize: 16
  },
  button: {
    backgroundColor: '#158F97',
    width: '100%',
    borderRadius: 16,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText: {
    color: '#a1a1a1'
  },
  registerTextBold: {
    color: '#158F97'
  },
  churchData: {
    color: '#9D9D9D',
    textTransform: 'uppercase',
    fontWeight: '800',
    paddingTop: 40,
    paddingBottom: 16,
  },
  loginData: {
    color: '#9D9D9D',
    textTransform: 'uppercase',
    fontWeight: '800',
    paddingBottom: 16,
  }
});
