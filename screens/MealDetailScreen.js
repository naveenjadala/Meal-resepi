import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, ImageBackground, ScrollView, StatusBar } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderComponent';

import { MEALS } from '../data/Dummy-data';

const MealDetailScreen = props => {
    const id = props.navigation.getParam('id');
    const slectedMeal = MEALS.find(meal => meal.id === id);

    return (

        <View style={styles.mealItem} >
            <StatusBar
                // backgroundColor="rgba(0,0,0,0.1)"
                translucent={true} backgroundColor='rgba(0,0,0,0.3)'
            />
            <ImageBackground style={{ width: '100%', height: 300 }} source={{ uri: slectedMeal.imageUrl }}>

            </ImageBackground>

            <ScrollView style={{ marginHorizontal: 5, flex: 1 }}>
                <View>

                    <Text style={{ ...styles.title }}>{slectedMeal.title}</Text>

                    <View style={{ ...styles.mealDetails }}>
                        <View style={{ ...styles.mealRow, justifyContent: 'space-between' }}>
                            <Text>Time : {slectedMeal.duration}mins</Text>
                            <Text> {slectedMeal.isVegetarian}</Text>
                        </View>
                        <Text>Deficlutly :{slectedMeal.complexity.toUpperCase()}</Text>
                        <Text style={{ ...styles.subTitle }}>Ingredients</Text>
                        {slectedMeal.ingredients.map(data => (
                            <Text key={data}>{data}</Text>
                        ))}
                        <Text style={{ ...styles.subTitle }}>Steps to prepair</Text>
                        {slectedMeal.steps.map(Item => (
                            <Text key={Item}>*{Item}.</Text>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

// MealDetailScreen.navigationOptions = navigationData => {
//     const id = navigationData.navigation.getParam('id');
//     const slectedMeal = MEALS.find(meal => meal.id === id);
//     return {
//         headerTitle: slectedMeal.title,
//         headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
//             <Item
//                 title="Favorite"
//                 iconName="ios-star"
//                 onPress={() => { console.log("ok") }}>

//             </Item>
//         </HeaderButtons>)
//     }
// }

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        marginBottom: 10,
    },
    mealRow: {
        flexDirection: "row"
    },
    mealDetails: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: '15%',
    },
    header: {
        height: '85%'
    },
    title: {
        fontSize: 18,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical: 5
    },
    subTitle: {
        fontSize: 20,
        color: 'black',
        textAlign: "center"
    }
});

export default MealDetailScreen;