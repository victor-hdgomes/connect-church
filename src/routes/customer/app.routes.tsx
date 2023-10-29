import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { Notifications as NotificationComponent } from "@/components/header/notifications";

import TabRoutes from "@/routes/customer/tab.routes";
import Notifications from "@/pages/customer/Notifications";
import EditProfile from "@/pages/customer/EditProfile";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

const AppStack = createStackNavigator();

const CustomerRoutes: React.FC = () => {
    const { t } = useTranslation();

    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name={t("customerRoutes.appRoutes.back")}
                component={TabRoutes}
                options={{
                    headerShown: false
                }}
            />
            <AppStack.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    title: t("customerRoutes.appRoutes.notifications"),
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
            <AppStack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{
                    title: t("customerRoutes.appRoutes.editProfile"),
                    headerShadowVisible: false,
                    headerRight: () => (
                        <NotificationComponent />
                    ),
                }}
            />
        </AppStack.Navigator>
    );
}

export default CustomerRoutes;
