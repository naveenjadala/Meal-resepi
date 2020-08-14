import React from 'react';
import { Text, View, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderComponent';

import { CATEGORIES } from '../data/Dummy-data';
import CategoriesGrid from '../components/CategoriesGridComponent';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoriesGrid title={itemData.item.title} image={itemData.item.imageUrl} color={itemData.item.colour} onSelect={() => {
                props.navigation.navigate('CategoriesMealScreen', {
                    itemId: itemData.item.id,
                    itemTitle: itemData.item.title
                })
            }} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList numColumns={2}
                data={CATEGORIES}
                renderItem={renderGridItem} />
        </View>
    )
};

CategoriesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Favorite"
                iconName="menu"
                onPress={() => { navigationData.navigation.toggleDrawer(); }}>

            </Item>
        </HeaderButtons>)
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
});

export default CategoriesScreen;
