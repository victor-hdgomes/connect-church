import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "@/contexts/auth";

import AuthRoutes from "@/routes/auth/auth.routes";
import ProfessionalRoutes from "@/routes/professional/app.routes";
import CustomerRoutes from "@/routes/customer/app.routes";
import ChurchRoutes from "@/routes/church/app.routes"

const Routes: React.FC = () => {
    const { user, signed, loading } = useAuth();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='#999' />
            </View>
        )
    }

    if (signed) {
        switch (user?.level) {
            case 'professional':
                return <ProfessionalRoutes />
            case 'customer':
                return <CustomerRoutes />
            case 'church':
                return <ChurchRoutes />
        }
    }

    return <AuthRoutes />
}

export default Routes;