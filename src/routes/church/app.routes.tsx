import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { Notifications as NotificationComponent } from "@/components/header/notifications";

import TabRoutes from "@/routes/church/tab.routes";
import Notifications from "@/pages/church/Notifications";
import EditProfile from "@/pages/church/EditProfile";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

const AppStack = createStackNavigator();

const ChurchRoutes: React.FC = () => {
    const { t } = useTranslation();

    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name={t("churchRoutes.appRoutes.back")}
                component={TabRoutes}
                options={{
                    headerShown: false
                }}
            />
            <AppStack.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    title: t("churchRoutes.appRoutes.notifications"),
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
            <AppStack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{
                    title: t("churchRoutes.appRoutes.editProfile"),
                    headerShadowVisible: false,
                    headerRight: () => (
                        <NotificationComponent />
                    ),
                }}
            />
        </AppStack.Navigator>
    );
}

export default ChurchRoutes;
