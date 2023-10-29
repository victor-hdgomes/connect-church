import React, { useRef } from "react";
import { SearchFilterInputComponent } from "@/components/inputs/searchFilterInputComponent";
import { Modalize } from 'react-native-modalize'
import { StyleSheet } from 'react-native';
import { PerformedServiceListItem } from "@/components/elements/performedServiceListItem";
import { SearchFilter } from "@/components/modalize/searchFilter";
import { PersonalNotes } from "@/components/modalize/personalNotes";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function PerformedTemplate() {
    const { t } = useTranslation();
    
    const filterRef = useRef<Modalize | null>(null);
    const personalNotesRef = useRef<Modalize | null>(null);

    function onOpenFilter() {
        filterRef.current?.open()
    }

    function onOpenPersonalNotes() {
        personalNotesRef.current?.open()
    }

    return (
        <>
            <SearchFilterInputComponent onOpen={onOpenFilter} placeholder={t("components.templates.performedTemplate.search.placeholder")} />
            <PerformedServiceListItem onOpen={onOpenPersonalNotes} serviceType="Tipo de serviço" customerName="Nome do cliente" date="14 jan - 14:32" />
            <PerformedServiceListItem onOpen={onOpenPersonalNotes} serviceType="Tipo de serviço" customerName="Nome do cliente" date="14 jan - 14:32" />
            <PerformedServiceListItem onOpen={onOpenPersonalNotes} serviceType="Tipo de serviço" customerName="Nome do cliente" date="14 jan - 14:32" />
            <PerformedServiceListItem onOpen={onOpenPersonalNotes} serviceType="Tipo de serviço" customerName="Nome do cliente" date="14 jan - 14:32" />

            <SearchFilter modalizeRef={filterRef}/>
            <PersonalNotes modalizeRef={personalNotesRef}/>
        </>
    );
}

const styles = StyleSheet.create({});
