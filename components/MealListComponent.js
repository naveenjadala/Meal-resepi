import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

const MealListComponent = props => {
    return (
        <View style={styles.mealItem} >
            <TouchableOpacity onPress={props.onSelect}>
                <View style={{ ...styles.header }}>
                    <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: props.data.imageUrl }}>
                        <Text style={{...styles.title}}>{props.data.title}</Text>
                    </ImageBackground>
                </View>

                <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                    <Text>{props.data.duration}mins</Text>
                    <Text>{props.data.complexity.toUpperCase()}</Text>
                    <Text>{props.data.affordability.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: "row"
    },
    mealDetails: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: '15%',
        alignItems: "center"
    },
    header: {
        height: '85%'
    },
    title: {
        fontSize: 18,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical: 5
    }
});

export default MealListComponent;
