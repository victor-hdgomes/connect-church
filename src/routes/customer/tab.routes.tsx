import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native'

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

import Home from "@/pages/customer/Home";
import Bible from "@/pages/customer/Bible";
import Schedule from "@/pages/customer/Schedule";
import Settings from "@/pages/customer/Settings";

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
    <Tab.Navigator initialRouteName={t("customerRoutes.tabRoutes.home")}>
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
            <Text style={{ color: focused ? '#158F97' : '#7B7B7B', fontSize: 10 }}>{t("customerRoutes.tabRoutes.home")}</Text>
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
          title: t("customerRoutes.tabRoutes.bible"),
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerRight: () => (
            <Info />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#158F97' : '#7B7B7B', fontSize: 10 }}>{t("customerRoutes.tabRoutes.bible")}</Text>
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
          title: t("customerRoutes.tabRoutes.schedule"),
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#158F97' : '#7B7B7B', fontSize: 10 }}>{t("customerRoutes.tabRoutes.schedule")}</Text>
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
          title: t("customerRoutes.tabRoutes.settings"),
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
            <Text style={{ color: focused ? '#158F97' : '#7B7B7B', fontSize: 10 }}>{t("customerRoutes.tabRoutes.settings")}</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
