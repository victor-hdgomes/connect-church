import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from "@/pages/auth/SignIn";

const AuthStack = createStackNavigator()

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} options={{
            headerShown: false,
            headerShadowVisible: false,
        }} />
    </AuthStack.Navigator>
)

export default AuthRoutes;