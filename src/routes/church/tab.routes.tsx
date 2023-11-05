import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native'

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

import Home from "@/pages/church/Home";
import Bible from "@/pages/church/Bible";
import Schedule from "@/pages/church/Schedule";
import Settings from "@/pages/church/Settings";

import { ChangeAccount } from "@/components/header/changeAccount";
import { Info } from "@/components/header/info";
import { Notifications as NotificationComponent } from "@/components/header/notifications";

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  const { t } = useTranslation();

  const getTabBarIconColor = (focused: boolean) => {
    const focusedColor = '#158F97';
    const nonFocusedColor = '#7B7B7B';

    return focused ? focusedColor : nonFocusedColor;
  };

  return (
    <Tab.Navigator initialRouteName={t("churchRoutes.tabRoutes.home")}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <ChangeAccount />
          ),
          headerRight: () => (
            <NotificationComponent />
          ),
          headerShadowVisible: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#158F97' : '#7B7B7B', fontSize: 10 }}>{t("churchRoutes.tabRoutes.home")}</Text>
          ),
          tabBarIcon: ({ size, focused }) => (
            focused ?
              <Icon name="home" size={size} color={getTabBarIconColor(focused)} />
              : <Icon name="home-outline" size={size} color={getTabBarIconColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Bible"
        component={Bible}
        options={{
          title: t("churchRoutes.tabRoutes.bible"),
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerRight: () => (
            <Info />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#158F97' : '#7B7B7B', fontSize: 10 }}>{t("churchRoutes.tabRoutes.bible")}</Text>
          ),
          tabBarIcon: ({ size, focused }) => (
            focused ?
              <Icon name="book" size={size} color={getTabBarIconColor(focused)} />
              : <Icon name="book-outline" size={size} color={getTabBarIconColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          title: t("churchRoutes.tabRoutes.schedule"),
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#158F97' : '#7B7B7B', fontSize: 10 }}>{t("churchRoutes.tabRoutes.schedule")}</Text>
          ),
          tabBarIcon: ({ size, focused }) => (
            focused ?
              <Icon name="calendar" size={size} color={getTabBarIconColor(focused)} />
              : <Icon name="calendar-outline" size={size} color={getTabBarIconColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: t("churchRoutes.tabRoutes.settings"),
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerRight: () => (
            <NotificationComponent />
          ),
          tabBarIcon: ({ size, focused }) => (
            focused ?
              <Icon name="settings" size={size} color={getTabBarIconColor(focused)} />
              : <Icon name="settings-outline" size={size} color={getTabBarIconColor(focused)} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#158F97' : '#7B7B7B', fontSize: 10 }}>{t("churchRoutes.tabRoutes.settings")}</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
