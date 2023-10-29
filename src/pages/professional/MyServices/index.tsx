import React, { useState, useMemo, useCallback } from "react";
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar, TabBarIndicator } from 'react-native-tab-view';
import PerformedTemplate from "@/components/templates/performedTemplate";
import RequestedTemplate from "@/components/templates/requestedTemplate";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function MyServices() {
  const { t } = useTranslation();

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const routes = useMemo(() => [
    { key: 'requested', title: t("professionalPages.myServices.tab.requested") },
    { key: 'performed', title: t("professionalPages.myServices.tab.performed") },
  ], [t]);

  const PerformedRoute = useCallback(() => {
    return <PerformedTemplate />;
  }, []);

  const RequestedRoute = useCallback(() => {
    return <RequestedTemplate />;
  }, []);

  const renderScene = SceneMap({
    requested: RequestedRoute,
    performed: PerformedRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      activeColor={'#158F97'}
      inactiveColor={'#7B7B7B'}
      style={{ backgroundColor: 'transparent', elevation: 0 }}
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
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
