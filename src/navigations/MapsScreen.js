import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapsComponents from "../components/MapsComponents";

const MapsScreen = () => {
    return (
            <View style={styles.container}>
                <MapsComponents/>
            </View>
    )
};

export default MapsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
});