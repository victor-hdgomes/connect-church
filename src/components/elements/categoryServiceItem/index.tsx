import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FilterItem } from "@/components/elements/filterItem";

export const CategoryServiceItem: React.FC<{ icon: string, iconName: string, category: string, isShowCategory: boolean, setIsShowCategory: (isShowCategory: boolean) => void; }> = ({ iconName, isShowCategory, setIsShowCategory, category, icon }) => {
    const iconMapping = {
        MaterialCommunityIcons: IconMaterialCommunityIcons,
        Entypo: IconEntypo,
        MaterialIcons: IconMaterialIcons,
    };

    const IconComponent = iconMapping[icon as keyof typeof iconMapping] || IconMaterialCommunityIcons;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsShowCategory(!isShowCategory)} style={styles.content}>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                        <IconComponent name={iconName} size={20} color="#7B7B7B" />
                    </View>
                    <Text style={styles.category}>{category}</Text>
                </View>
                <View>
                    {isShowCategory ? (
                        <IconEntypo name="chevron-up" size={26} color="#c4c4c4" />
                    ) : (
                        <IconEntypo name="chevron-down" size={26} color="#c4c4c4" />
                    )}
                </View>
            </TouchableOpacity>
            {isShowCategory && (
                <View style={styles.categories}>
                    <FilterItem label="Gastronomia" />
                    <FilterItem label="Cozinha fria" />
                    <FilterItem label="Confeitaria" />
                    <FilterItem label="Doces" />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 8
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        backgroundColor: '#F5F5F5',
        padding: 14,
        borderRadius: 50,
        marginRight: 12
    },
    category: {
        color: '#7B7B7B',
        fontSize: 10,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
        fontWeight: '700'
    },
    categories: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    }
});
