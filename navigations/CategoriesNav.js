import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FilterScreen from '../screens/FilterScreen';
// import moduleName from '../asserts/Images/h';


const categoriesNav = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoriesMealScreen: {
        screen: CategoriesMealScreen
    },
    MealDetailsScreen: {
        screen: MealDetailsScreen,
        navigationOptions: {
            headerShown: false
        }
    }
});

const favNav = createStackNavigator({
    FavoritesScreen: {
        screen: FavoritesScreen,
    },
    MealDetailsScreen: {
        screen: MealDetailsScreen
    }
});

const filterNav = createStackNavigator({
    Filters: {
        screen: FilterScreen
    }
});

const MealTabNav = createBottomTabNavigator(
    {
        Meals: {
            screen: categoriesNav,
            navigationOptions: {
                tabBarLabel: 'Home',
                activeColor: '#336aff',
                tabBarIcon: ({ primaryColor, focused }) => (
                    <Image source={focused ? require('../asserts/Images/dashboard_bottom_home.png') : require('../asserts/Images/home_black.png')}
                        style={{ width: '10%', height: undefined, aspectRatio: 1 }} resizeMode="contain" />
                ),
            },
        },
        favoritesScreen: {
            screen: favNav,
            navigationOptions: {
                tabBarLabel: 'Favrites',
                tabBarIcon: ({ primaryColor, focused }) => (
                    <Image source={focused ? require('../asserts/Images/dashboard_bottom_home.png') : require('../asserts/Images/home_black.png')}
                        style={{ width: '10%', height: undefined, aspectRatio: 1 }} resizeMode="contain" />
                ),
            },
        },
    },
    {
        resetOnBlur: true,
        shifting: false,
        activeColor: 'black',
        barStyle: {
            activeColor: 'black',
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#f2f2f2',
            borderRadius: 25,
            borderColor: 'transparent',
            overflow: 'hidden',
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 10,
            marginTop: 3,
            elevation: 30,
            shadowOpacity: 0.5,
        },
        tabBarOptions: {
            activeTintColor: '#336aff',
            inactiveTintColor: 'gray',
        },
    }
);

const sideDrawer = createDrawerNavigator({
    Home: {
        screen: MealTabNav
    },
    Filters: {
        screen: filterNav
    }
})

export default createAppContainer(sideDrawer);