import React from "react";
import { StyleSheet, View, Text, FlatList, Dimensions, ImageBackground } from 'react-native';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

const { width } = Dimensions.get('window')

interface Item {
    image: string,
}

export const MessageOfTheDayCarousel: React.FC<{ data: Item[] }> = ({ data }) => {
    const { t } = useTranslation();

    return (
        <View style={{ marginBottom: 48 }}>
            <Text style={styles.information}>Mensagem do dia</Text>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                snapToOffsets={[...Array(data.length)].map((x, i) => i * (width * .5 - 40) + (i - 1) * 40)}
                keyExtractor={item => item.image}
                horizontal
                style={{ marginLeft: 10 }}
                snapToAlignment="start"
                scrollEventThrottle={16}
                decelerationRate="fast"
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <ImageBackground
                            source={{ uri: item.image }}
                            style={styles.imageBackground}
                        >
                            <View style={styles.shadow}></View>
                        </ImageBackground>
                    </View>
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    information: {
        marginLeft: 20,
        textTransform: 'uppercase',
        color: '#7b7b7b',
        fontWeight: '700',
        fontSize: 14,
        letterSpacing: .56,
        marginBottom: 12
    },
    container: {
        borderRadius: 16,
        overflow: 'hidden',
        height: width / 2,
        width: width * .5 - 20,
        marginHorizontal: 10,
    },
    imageBackground: {
        flex: 1,
    },
    shadow: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
});