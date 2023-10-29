import React from "react";
import { StyleSheet, View, Text, FlatList, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import '@/utils/translations/i18n'
import { useTranslation } from 'react-i18next'

const { width } = Dimensions.get('window')

interface Item {
    image: string,
    avatar: string,
    name: string,
    profession: string
}

export const RecentProfessionalsCarousel: React.FC<{ data: Item[] }> = ({ data }) => {
    const { t } = useTranslation();
    
    const navigation = useNavigation();

    const handlePress = () => {
        // @ts-expect-error
        navigation.navigate('ProfessionalProfile');
    };

    return (
        <>
            <Text style={styles.information}>{t("components.carousel.recentProfessionalsCarousel.recentProfessionals")}</Text>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                snapToOffsets={[...Array(data.length)].map((x, i) => i * (width * .7 - 40) + (i - 1) * 40)}
                keyExtractor={item => item.name}
                horizontal
                style={{ marginLeft: 10 }}
                snapToAlignment="start"
                scrollEventThrottle={16}
                decelerationRate="fast"
                renderItem={({ item }) => (
                    <View style={styles.shadowContainer}>
                        <View style={styles.container}>
                            <ImageBackground
                                source={{ uri: item.image }}
                                style={styles.imageBackground}
                            >
                                <View style={styles.shadow}></View>
                            </ImageBackground>

                            <View style={{ width: 56, borderRadius: 50, borderWidth: 1.5, borderColor: '#fff', height: 56, position: 'absolute', top: 50, left: 16, zIndex: 2 }}>
                                <ImageBackground
                                    source={{ uri: item.avatar }}
                                    style={styles.avatar}
                                />
                            </View>

                            <View style={styles.textContainer}>
                                <View style={{ marginTop: 20 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Icon name="verified" size={20} color="#158F97" />
                                    </View>
                                    <Text style={styles.profession}>{item.profession}</Text>
                                </View>
                                <TouchableOpacity onPress={handlePress} style={{ backgroundColor: '#F3FBFC', alignItems: 'center', padding: 18, borderRadius: 12 }}>
                                    <Text style={{ color: '#158F97', fontWeight: '700', letterSpacing: .48, fontSize: 12 }}>{t("components.carousel.recentProfessionalsCarousel.seeProfessional")}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        </>
    )
}

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
    shadowContainer: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 15
    },
    container: {
        borderRadius: 16,
        overflow: 'hidden',
        height: width / 1.6,
        width: width * .7 - 20,
        marginHorizontal: 10,
    },
    imageBackground: {
        flex: 2,
    },
    avatar: {
        flex: 1,
        borderRadius: 50,
        overflow: 'hidden',
    },
    shadow: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    textContainer: {
        flex: 3,
        padding: 16,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    name: {
        color: '#262626',
        fontWeight: '700',
        fontSize: 18,
        letterSpacing: .72,
        marginRight: 8,
    },
    profession: {
        color: '#7B7B7B',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: .56,
    }
});

