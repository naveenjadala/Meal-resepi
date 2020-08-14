import React, { useState } from 'react';
import { Text, View, FlatList, Switch, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderComponent';


const FilterScreen = props => {
    const [isgluteenFree, setGluteernFree] = useState(false);
    return (
        <View style={{ flex: 1}}>
            <View style={{ ...styles.container }}>
                <View style={{ ...styles.filterSty }}>
                    <Text style={{ ...styles.headerSty }}>Gluten free</Text>
                    <Switch value={isgluteenFree} onValueChange={value => {
                        setGluteernFree(value);
                    }} />
                </View>
                <View style={{ ...styles.filterSty }}>
                    <Text style={{ ...styles.headerSty }}>Vegan</Text>
                    <Switch />
                </View>
                <View style={{ ...styles.filterSty }}>
                    <Text style={{ ...styles.headerSty }}>Vegetarian</Text>
                    <Switch />
                </View>
                <View style={{ ...styles.filterSty }}>
                    <Text style={{ ...styles.headerSty }}>LactoseFree</Text>
                    <Switch />
                </View>

            </View>
            <TouchableOpacity style={{...styles.buttonSty}}>
                <View style={{alignItems: "center", justifyContent: "center"}}>
                    <Text style={{textAlignVertical:"center", marginTop: 15, color: 'white'}}>Apply</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

FilterScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Filters',
        headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Favorite"
                iconName="filter"
                onPress={() => { navigationData.navigation.goBack(null); }}>

            </Item>
        </HeaderButtons>),
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Reset"
                onPress={() => { console.log("ok") }}>

            </Item>
        </HeaderButtons>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    headerSty: {
        fontSize: 18
    },
    filterSty: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
    },
    buttonSty: {
        margin: 4,
        height: 50,
        backgroundColor: '#336aff',
        borderBottomEndRadius: 8,
        borderBottomLeftRadius: 8
    }
});

export default FilterScreen;
