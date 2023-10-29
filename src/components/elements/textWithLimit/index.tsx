import React, { useState } from "react";
import { StyleSheet, View, Text } from 'react-native';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

export const TextWithLimit: React.FC<{ text: string, characterLimit: number }> = ({ text, characterLimit }) => {
    const { t } = useTranslation();

    const [showAll, setShowAll] = useState(false);

    const displayText = showAll ? text : text.slice(0, characterLimit);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {displayText}
                {text.length > characterLimit && (
                    <Text onPress={toggleShowAll} style={styles.buttonText}>
                        {showAll ?
                            ` ${t("components.elements.textWithLimit.seeLess")}`
                            : `... ${t("components.elements.textWithLimit.seeMore")}`}
                    </Text>
                )}
            </Text>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        color: '#434343',
        fontSize: 14,
        letterSpacing: .56,
    },
    buttonText: {
        color: '#158F97',
        marginLeft: 8,
        fontWeight: 'bold',
    },
});
