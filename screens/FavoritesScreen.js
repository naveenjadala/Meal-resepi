import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderComponent';

import { MEALS } from '../data/Dummy-data';
import MealComponent from '../components/MealListComponent';

const FavoritesScreen = props => {
    const mealData = MEALS.filter(meal => meal.categoryIds.indexOf('c2') >= 0);

    const renderData = (itemData) => {
        return (
            <MealComponent data={itemData.item} onSelect={() => {
                props.navigation.navigate('MealDetailsScreen', { id: itemData.item.id })
            }} />
        );
    }
    return (
        <FlatList data={mealData} renderItem={renderData} />
    )
};

FavoritesScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'My Favorites',
        headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Favorite"
                iconName="menu"
                onPress={() => { navigationData.navigation.toggleDrawer(); }}>

            </Item>
        </HeaderButtons>)
    }
}

export default FavoritesScreen;
