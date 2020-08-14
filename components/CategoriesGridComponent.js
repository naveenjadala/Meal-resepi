import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const CategoriesGridCompoents = props => {
    return (
        <TouchableOpacity style={[styles.gridLayout]}
            onPress={props.onSelect}>
            <ImageBackground style={{ ...styles.container }} source={{ uri: props.image }}>
                {/* <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}> */}

                    <Text style={{...styles.title}}>{props.title}</Text>

                {/* </View> */}
            </ImageBackground>
        </TouchableOpacity >
    )
};

export default CategoriesGridCompoents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 20,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        
        overflow: 'hidden'
    },
    gridLayout: {
        flex: 1,
        margin: 15,
        height: 100
    },
    title: {
        width: '100%',
        fontSize: 15,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical: 3,
        paddingHorizontal: 5
    }
});