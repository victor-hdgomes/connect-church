import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { CheckBox } from "react-native-elements";
import { Modalize } from 'react-native-modalize'
import { SearchInputComponent } from "@/components/inputs/searchInputComponent";

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export const SearchFilter: React.FC<{ modalizeRef: React.Ref<Modalize> }> = ({ modalizeRef }) => {
    const { t } = useTranslation();

    return (
        <Modalize
            ref={modalizeRef}
            snapPoint={460}
            modalStyle={styles.modalStyle}
        >
            <View style={styles.modalBody}>
                <Text style={styles.title}>{t("components.modalize.searchFilter.title")}</Text>
                <SearchInputComponent placeholder={t("components.modalize.searchFilter.search.placeholder")} />

                <View>
                    <Text style={styles.subTitle}>{t("components.modalize.searchFilter.subTitle")}</Text>
                    <CheckBox
                        containerStyle={styles.containerCheckBox}
                        textStyle={styles.textCheckBox}
                        checkedColor="#158F97"
                        title="Alimentação"
                        checked={true}
                    />
                    <CheckBox
                        containerStyle={styles.containerCheckBox}
                        textStyle={styles.textCheckBox}
                        checkedColor="#158F97"
                        title="Segurança"
                        checked={false}
                    />
                    <CheckBox
                        containerStyle={styles.containerCheckBox}
                        textStyle={styles.textCheckBox}
                        checkedColor="#158F97"
                        title="Estética e Beleza"
                        checked={false}
                    />
                    <CheckBox
                        containerStyle={styles.containerCheckBox}
                        textStyle={styles.textCheckBox}
                        checkedColor="#158F97"
                        title="Saúde"
                        checked={false}
                    />
                    <CheckBox
                        containerStyle={styles.containerCheckBox}
                        textStyle={styles.textCheckBox}
                        checkedColor="#158F97"
                        title="Diversão e Lazer"
                        checked={false}
                    />
                    <CheckBox
                        containerStyle={styles.containerCheckBox}
                        textStyle={styles.textCheckBox}
                        checkedColor="#158F97"
                        title="Limpeza e organização"
                        checked={false}
                    />
                    <CheckBox
                        containerStyle={styles.containerCheckBox}
                        textStyle={styles.textCheckBox}
                        checkedColor="#158F97"
                        title="Serviços domésticos"
                        checked={false}
                    />
                    <CheckBox
                        containerStyle={styles.containerCheckBox}
                        textStyle={styles.textCheckBox}
                        checkedColor="#158F97"
                        title="Manutenção e Reparação"
                        checked={false}
                    />
                    <CheckBox
                        containerStyle={styles.containerCheckBox}
                        textStyle={styles.textCheckBox}
                        checkedColor="#158F97"
                        title="Saúde animal"
                        checked={false}
                    />
                </View>
            </View>
        </Modalize >
    )
}

const styles = StyleSheet.create({
    modalStyle: {
        marginTop: 20
    },
    modalBody: {
        padding: 20
    },
    title: {
        color: '#262626',
        fontWeight: '600',
        letterSpacing: .64,
        fontSize: 16,
        textAlign: 'center' 
    },
    containerCheckBox: {
        width: '100%',
        marginStart: 0,
        backgroundColor: 'transparent',
        borderWidth: 0
    },
    textCheckBox: {
        color: '#434343',
        fontSize: 14
    },
    subTitle: {
        color: '#262626',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: .64
    }
});
