import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { Info } from "@/components/header/info";
import { Notifications as NotificationComponent } from "@/components/header/notifications";

import TabRoutes from "@/routes/professional/tab.routes";

import ProfessionalProfile from "@/pages/professional/ProfessionalProfile";
import Notifications from "@/pages/professional/Notifications";
import MyPayments from "@/pages/professional/MyPayments";
import EditProfile from "@/pages/professional/EditProfile";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

const AppStack = createStackNavigator();

const ProfessionalRoutes: React.FC = () => {
    const { t } = useTranslation();

    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name={t("professionalRoutes.appRoutes.back")}
                component={TabRoutes}
                options={{
                    headerShown: false
                }}
            />
            <AppStack.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    title: t("professionalRoutes.appRoutes.notifications"),
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
            <AppStack.Screen
                name="ProfessionalProfile"
                component={ProfessionalProfile}
                options={{
                    title: '',
                    headerShadowVisible: false,
                    headerRight: () => (
                        <Info />
                    ),
                }}
            />
            <AppStack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{
                    title: t("professionalRoutes.appRoutes.editProfile"),
                    headerShadowVisible: false,
                    headerRight: () => (
                        <NotificationComponent />
                    ),
                }}
            />
            <AppStack.Screen
                name="MyPayments"
                component={MyPayments}
                options={{
                    title: t("professionalRoutes.appRoutes.myPayments"),
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
        </AppStack.Navigator>
    );
}

export default ProfessionalRoutes;
