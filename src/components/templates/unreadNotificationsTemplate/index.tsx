import React from "react";
import { StyleSheet } from 'react-native';
import { UnreadNotificationListItem } from "@/components/elements/unreadNotificationListItem";
import { ScrollView } from "react-native-gesture-handler";

export default function UnreadNotificationsTemplate() {
    return (
        <ScrollView>
            <UnreadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <UnreadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <UnreadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <UnreadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <UnreadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <UnreadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <UnreadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <UnreadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <UnreadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <UnreadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <UnreadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <UnreadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
