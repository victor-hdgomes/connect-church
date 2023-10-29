import React from "react";
import { StyleSheet } from 'react-native';
import { ReadNotificationListItem } from "@/components/elements/readNotificationListItem";
import { UnreadNotificationListItem } from "@/components/elements/unreadNotificationListItem";
import { ScrollView } from "react-native-gesture-handler";

export default function AllNotificationsTemplate() {
    return (
        <ScrollView>
            <ReadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <ReadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <UnreadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <ReadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
            <ReadNotificationListItem title="Oferta Semanal" description="Aproveite as ofertas da semana!" date="14 jan" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
