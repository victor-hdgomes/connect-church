import React, { useState, useMemo } from "react";
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar, TabBarIndicator } from 'react-native-tab-view';
import AllNotificationsTemplate from "@/components/templates/allNotificationsTemplate";
import UnreadNotificationsTemplate from "@/components/templates/unreadNotificationsTemplate";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function Notifications() {
  const { t } = useTranslation();

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const routes = useMemo(() => [
    { key: 'all', title: t("customerPages.notifications.tab.all") },
    { key: 'unread', title: t("customerPages.notifications.tab.unread") },
  ], [t]);

  const PerformedRoute = () => (
    <UnreadNotificationsTemplate />
  );

  const AllRoute = () => (
    <AllNotificationsTemplate />
  );

  const renderScene = SceneMap({
    all: AllRoute,
    unread: PerformedRoute,
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
