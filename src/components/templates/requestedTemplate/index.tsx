import React, { useRef } from "react";
import { RequestedServiceListItem } from "@/components/elements/requestedServiceListItem";
import { SearchFilterInputComponent } from "@/components/inputs/searchFilterInputComponent";
import { Modalize } from 'react-native-modalize'
import { SearchFilter } from "@/components/modalize/searchFilter";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export default function RequestedTemplate() {
    const { t } = useTranslation();

    const modalizeRef = useRef<Modalize | null>(null);

    function onOpen() {
        modalizeRef.current?.open()
    }

    return (
        <>
            <SearchFilterInputComponent onOpen={onOpen} placeholder={t("components.templates.requestedTemplate.search.placeholder")} />
            <RequestedServiceListItem serviceType="Tipo de serviço" customerName="Nome do cliente" date="14 jan - 14:32" />
            <RequestedServiceListItem serviceType="Tipo de serviço" customerName="Nome do cliente" date="14 jan - 14:32" />
            <RequestedServiceListItem serviceType="Tipo de serviço" customerName="Nome do cliente" date="14 jan - 14:32" />

            <SearchFilter modalizeRef={modalizeRef}/>
        </>
    );
}
