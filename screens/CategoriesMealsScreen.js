import React from 'react';
import { Text, View, Button, FlatList, Image, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderComponent';

import { MEALS } from '../data/Dummy-data';
import MealComponent from '../components/MealListComponent';

const CategoriesMealScreen = props => {
    const id = props.navigation.getParam('itemId');
    const value = props.navigation.getParam('itemTitle');

    const mealData = MEALS.filter(meal => meal.categoryIds.indexOf(id) >= 0);

    const renderData = (itemData) => {
        return (
            <MealComponent data={itemData.item} onSelect={() => {
                props.navigation.navigate('MealDetailsScreen', {id: itemData.item.id})
            }}/>
        );
    }

    return (
        <FlatList data={mealData} renderItem={renderData} />
    );
};

CategoriesMealScreen.navigationOptions = (navigationData) => {
    const title = navigationData.navigation.getParam('itemTitle');
    console.log(title);
    return {
        headerTitle: title,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Favorite"
                iconName="filter"
                onPress={() => { navigationData.navigation.navigate('Filters') }}>

            </Item>
        </HeaderButtons>)
    }

}

const styles = StyleSheet.create({

});


export default CategoriesMealScreen;
